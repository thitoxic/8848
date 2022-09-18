import React, { useEffect, useState } from 'react'
import axios from "axios";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Register from './register';

const ClientList = () => {
  const [clients, setClients] = useState([])
  const [formdata, setFormData] = useState([])
  useEffect(() => {
    getClients()

  }, [])

  const getName = (name) => {
    axios.put(`http://work.8848digitalerp.com/api/resource/Client/${name}`,{
      "gender": "Male"
  }, {
    headers: {
      Authorization: 'token 86ecc77628c9544:bb3daa49eab307e' //the token is a variable which holds the token
    }
  }).then((resp) => {
        setFormData(resp.data.data)
      }).catch((err) => {
        console.log('err', err)
      })
    }
  



  const getClients = () => {
    axios.get("http://work.8848digitalerp.com/api/resource/Client/", {
      headers: {
        Authorization: 'token 86ecc77628c9544:bb3daa49eab307e' //the token is a variable which holds the token
      }
    }).then((resp) => {
      setClients(resp.data.data)
    }).catch((err) => {
      console.log('err', err)
    })
  }
  return (
    <>
    <TableContainer className='my-5' component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Client Name</TableCell>
            <TableCell align="right">View Client</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <TableRow
              key={client.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> {client.name}</TableCell>
              <TableCell align="right" component="th" scope="row"><button onClick={() => getName(client.name)}>view client</button></TableCell>

            </TableRow>

          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Register formdata={formdata}/>
    </>
  )
}

export default ClientList