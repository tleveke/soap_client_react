import React, { useEffect, useState } from 'react'
import soapRequest from 'easy-soap-request'
import XMLParser from 'react-xml-parser'
import { Box, CircularProgress, Fab, IconButton, Snackbar, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { Add, Delete } from '@material-ui/icons'
import Alert from '@material-ui/lab/Alert'

import Title from '../components/Title'
import DialogAddAuthor from './DialogAddAuthor'
import { endpointAuthor, defaultHeaders } from '../config'


//let tabAuthors = [{'id':1,'lastname':'LLLLLL','firstname':'FFFF'}];


export default function Authors() {
  const [loading, setLoading] = useState(true)
  const [authors, setAuthors] = useState([])
  const [openAddDialog, setOpenAddDialog] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)


  useEffect(() => {
    setLoading(true)
    init();
    console.log(authors);
  }, [])

  const init = async () => {
    let xml = `
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <getAuthorsRequest xmlns="http://nantes.ynov.com/soap/author">
        </getAuthorsRequest>
      </soap:Body>
    </soap:Envelope>
    `
    try {
      const { response } = await soapRequest({ url: endpointAuthor, headers: defaultHeaders, xml })
      const { body } = response
      let xmlParser = new XMLParser().parseFromString(body)

      let tabAuthors = [];
      xmlParser.getElementsByTagName('ns2:authors').forEach(element => {
        var author = {};
        element.children.forEach(element2 => {
          let name = element2.name.split(':')[1];
          author[name] = element2.value;
        });
        tabAuthors.push(author);
      });      
      setAuthors(tabAuthors);
      setLoading(false)
      // TODO parser le XML
    } catch (error) {
      setLoading(false)
      setOpenAlert(true)
    }
  }

  return (
    <>
      <Title>Liste des auteurs</Title>
      {loading ? (
        <CircularProgress />
      ) : (
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Prenom</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {authors.map((author) => (
              <TableRow>
                <TableCell>{author.id}</TableCell>
                <TableCell>{author.lastname}</TableCell>
                <TableCell>{author.firstname}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <Box display="flex" alignItems="center" justifyContent="center" style={{ height: '100%' }}>
        <Fab color="primary" aria-label="add" onClick={() => setOpenAddDialog(true)}>
          <Add />
        </Fab>
      </Box>
      {openAddDialog && (
        <DialogAddAuthor
          open={openAddDialog}
          handleClose={() => setOpenAddDialog(false)}
          reload={() => {
            setOpenAddDialog(false)
            init()
          }}
        />
      )}
      <Snackbar open={openAlert} autoHideDuration={5000} onClose={() => setOpenAlert(false)}>
        <Alert onClose={() => setOpenAlert(false)} severity="error">
          Une erreur réseau est survenue
        </Alert>
      </Snackbar>
    </>
  )
}
