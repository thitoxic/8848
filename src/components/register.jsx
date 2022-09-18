import React, {useState} from "react";
import { Formik, Field } from "formik";
import axios from "axios";


const Register = ({ formdata }) => {
  console.log("formdata", formdata);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState("");
  
  return (
    <div>
          <form>
              <input value={formdata.full_name} onChange={(e)=> setName(e.target.value)}></input>
          </form>
    </div>
  );
};

export default Register;
