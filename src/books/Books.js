import React, { useEffect, useState } from 'react'
import soapRequest from 'easy-soap-request'
import XMLParser from 'react-xml-parser'
import { Box, CircularProgress, Fab, IconButton,Button, Snackbar, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { Add, Delete } from '@material-ui/icons'
import Alert from '@material-ui/lab/Alert'

import Title from '../components/Title'
import DialogAddBook from './DialogAddBook'
import { endpointBook, defaultHeaders } from '../config'

export default function Books() {
  const [loading, setLoading] = useState(true)
  const [books, setBooks] = useState([])
  const [openAddDialog, setOpenAddDialog] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)

  useEffect(() => {
    setLoading(true);
    init()
    console.log(books);
  }, [])
  

  async function deleteBook(row) {
    let xml = `
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <deleteBookRequest xmlns="http://nantes.ynov.com/soap/book">
          <book>
            <id>`+row.id+`</id>
            <title>`+row.title+`</title>
            <isbn>`+row.isbn+`</isbn>
            <date_publication>`+row.date_publication+`</date_publication>
            <id_auteur>`+row.id_auteur+`</id_auteur>
          </book>
        </deleteBookRequest>
      </soap:Body>
    </soap:Envelope>`

    const { response } = await soapRequest({ url: endpointBook, headers: defaultHeaders, xml })
    const { body } = response
    let xmlParser = new XMLParser().parseFromString(body)
    console.log(xmlParser)
    init()
  }


  const init = async () => {
    let xml = `<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <getBooksRequest xmlns="http://nantes.ynov.com/soap/book">
        </getBooksRequest>
      </soap:Body>
    </soap:Envelope>`

    try {
      const { response } = await soapRequest({ url: endpointBook, headers: defaultHeaders, xml })
      const { body } = response
      let xmlParser = new XMLParser().parseFromString(body)
      console.log(xmlParser);

      let tabBooks = [];
      xmlParser.getElementsByTagName('ns2:books').forEach(element => {
        console.log(element);
        var book = {};
        element.children.forEach(element2 => {
          let name = element2.name.split(':')[1];
          book[name] = element2.value;
        });
        tabBooks.push(book);
      });      
      setBooks(tabBooks);
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setOpenAlert(true)
    }
  }

  return (
    <>
      <Title>Liste des livres</Title>
      {loading ? (
        <CircularProgress />
      ) : (
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Titre</TableCell>
              <TableCell>ISBN</TableCell>
              <TableCell>Date de publication</TableCell>
              <TableCell>ID de l'Auteur</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow>
                <TableCell>{book.id}</TableCell>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.isbn}</TableCell>
                <TableCell>{book.date_publication}</TableCell>
                <TableCell>{book.id_auteur}</TableCell>
                <TableCell>
                  <Button onClick={() => deleteBook(book)} variant="contained" color="primary">
                    Supprimer
                  </Button>
                </TableCell>
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
        <DialogAddBook
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
