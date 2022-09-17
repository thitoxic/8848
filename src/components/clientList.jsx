import React, { useEffect, useState } from 'react'
import axios from "axios";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ClientList = () => {

  const token = "86ecc77628c9544:bb3daa49eab307e"
  const [clients, setClients] = useState([])
  useEffect(() => {
    getClients()
  
  })
  
  

  const getClients =()=> {
    fetch("http://work.8848digitalerp.com/api/resource/Client/",{
      headers: {
        Authorization: 'token 86ecc77628c9544:bb3daa49eab307e' //the token is a variable which holds the token
    }
    }).then((resp)=> {
      console.log('err', resp)
    })
  }
 return (
  <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>Book Name</TableCell>
        <TableCell align="right">Book Author</TableCell>
        <TableCell align="right">Book ISB Number</TableCell>
        <TableCell align="right">Settings</TableCell>
       
      </TableRow>
    </TableHead>
    {/* <TableBody>
      {books.map((book) => (
        <TableRow
          key={book.bookId}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row"> {book.bookTitle}</TableCell>
          <TableCell align="right">{book.bookAuthor}</TableCell>
          <TableCell align="right">{book.bookIsbn}</TableCell>
          <TableCell align="right"
          settingsField 
          removeBook={()=>removeBook(book.bookId)} 
          editBook={()=>editBook(book)}/>

            <button>delete</button>
            <button>edit</button>
        </TableRow>
      ))}
    </TableBody> */}
  </Table>
</TableContainer>
 )
}

export default ClientList