import React from "react";
import { useState, useEffect } from "react";
import "./login.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik } from 'formik';
import TextField from '@mui/material/TextField';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [valid, setValid] = useState(true);




  let history = useNavigate();


  // const validatePasswordHandler = () => {
  //     if(password == ""){
  //       setPasswordIsValid(false)
  //     }
  // };

  const loginAPI = (values) => {
    console.log('values', values)
    axios.post("http://work.8848digitalerp.com/api/method/login", {
      "usr": email,
      "pwd": password
    }).then(function (response) {
      history(response.data.home_page)
    }).catch(function (error) {
      setValid(false)
    });
  }


  return (
    <div>
      <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}
        placeholder="username" />
      <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="password"  />
       {!valid ? <p className="text-danger">Email or Password must be wrong</p> : null}
      <button onClick={loginAPI}>submit</button>
    </div>

  )

};

export default Login;
