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
import "./clientList.css"
import { useNavigate } from "react-router-dom";


const ClientList = () => {
  const [clients, setClients] = useState([])
  const [formdata, setFormData] = useState([])

  let navigate = useNavigate()
  useEffect(() => {
    getClients()

  }, [])
  const [name,setName] = useState("")
  
  const getName = (name) => {
    axios.put(`http://work.8848digitalerp.com/api/resource/Client/${name}`,{
    formdata
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

  const logout=()=>{
    navigate("/login")
  }
  return (
    <>
    <button onClick={logout} className='button-6 '>logout</button>
    <TableContainer className='my-3' component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='thead'>Client Name</TableCell>
            <TableCell className='thead' align="right">Client Info</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <TableRow
              key={client.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"> {client.name}</TableCell>
              <TableCell align="right" component="th" scope="row"><button className='button-6' onClick={() => getName(client.name)}>view client</button></TableCell>

            </TableRow>

          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Register formdata={formdata} name={name}/>
    </>
  )
}

export default ClientList