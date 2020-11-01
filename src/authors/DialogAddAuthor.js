import React, { useState } from 'react'
import soapRequest from 'easy-soap-request'
import XMLParser from 'react-xml-parser'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

import { endpointAuthor, defaultHeaders } from '../config'

export default function DialogAddAuthor({ open, handleClose, reload }) {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [birth, setBirth] = useState('')

  const addAuthor = async () => {
    if (firstname === '' || lastname === '') {
      return
    }
    let xml = `
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <addAuthorRequest xmlns="http://nantes.ynov.com/soap/author">
          <author>
            <firstname>`+firstname+`</firstname>
            <lastname>`+lastname+`</lastname>
          </author>
        </addAuthorRequest>
      </soap:Body>
    </soap:Envelope>`

    const { response } = await soapRequest({ url: endpointAuthor, headers: defaultHeaders, xml })
    const { body } = response
    let xmlParser = new XMLParser().parseFromString(body)
    console.log(xmlParser)
    reload()
  }

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Ajouter un nouvel auteur</DialogTitle>
      <DialogContent>
        <DialogContentText>Pour ajouter un auteur, veuillez saisir les champs demandés</DialogContentText>
        <TextField autoFocus margin="dense" id="lastname" label="Nom" fullWidth onChange={(e) => setFirstname(e.target.value)} required />
        <TextField margin="dense" id="firstname" label="Prénom" fullWidth onChange={(e) => setLastname(e.target.value)} required />
        
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Annuler
        </Button>
        <Button variant="outlined" onClick={addAuthor} color="primary">
          Ajouter
        </Button>
      </DialogActions>
    </Dialog>
  )
}
