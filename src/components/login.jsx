import React from "react";
import { useState } from "react";
import "./login.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {



    let history = useNavigate();
const [popupStyle, showPopup] = useState("hide")
const [email, setEmail] = useState("");
const [password, setPassword] = useState("")

const popup = () => {
    showPopup("login-popup")
    setTimeout(() => showPopup("hide"), 3000)
}

const loginAPI =()=>{
    axios.post("http://work.8848digitalerp.com/api/method/login", {
            "usr": "test@gmail.com",
            "pwd": "Ascra@123"
    }).then(function (response) {
        console.log('response', response)
    }).catch(function (error) {
        console.log(error);
      });
}

console.log('email', email)

const onSuccess = e => {
    history("/")
}

const onFailure = e => {
    alert("User sign in Failed")
    console.log(e)
}
  return <div className="page">
           <div className="cover">
            <h1>Login</h1>
            <input type="text" value={email} onChange={setEmail((e)=> e.target.value)} placeholder="username" />
            <input type="password" value={password} onChange={setPassword((e)=> e.target.value)} placeholder="password" />

            <div className="login-btn" onClick={loginAPI}>Login</div>
            
        </div>
  </div>;
};

export default Login;
