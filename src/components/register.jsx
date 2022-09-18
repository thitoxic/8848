import React, { useState, useEffect } from "react";
import { Formik, Field } from "formik";
import axios from "axios";
import "./register.css";
import Grid from "@mui/material/Grid";

const Register = ({ formdata, name }) => {
  // console.log('formdata', formdata)
  const [field, setField] = useState("");
  const [updateform, setUpdateForm] = useState([]);

  const getName = (name, e) => {
    console.log("name", name);
    axios
      .put(
        `http://work.8848digitalerp.com/api/resource/Client/${name}`,
          updateform,
        {
          headers: {
            Authorization: "token 86ecc77628c9544:bb3daa49eab307e", //the token is a variable which holds the token
          },
        }
      )
      .then((resp) => {
        setUpdateForm(resp.data.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  console.log("updateform", updateform);
  return (
    <div className=" d-flex justify-content-evenly flex-column m-5 align-items-center client-form  ">
      <Grid className="d-flex justify-content-center"  container spacing={2}>

        <input
          className="form-input"
          defaultValue={formdata.full_name}
          name="name"
          placeholder="Name"
          onChange={(e) => {
          setUpdateForm((prev)=> { return {...prev, [e.target.name]: e.target.value }})

          }}
        ></input>
        <input
          className="form-input"
          defaultValue={formdata.address}
          name="address"
          placeholder="Address"
          onChange={(e) => {
          setUpdateForm((prev)=> { return {...prev, [e.target.name]: e.target.value }})

          }}
        ></input>
      </Grid>
      <Grid className="d-flex justify-content-center"  container spacing={2}>
      <input
      type="number"
        className="form-input"
        defaultValue={formdata.mobile_no}
        placeholder="Mobile"
        name="mobile_no"
        onChange={(e) => {
          setUpdateForm((prev)=> { return {...prev, [e.target.name]: e.target.value }})

        }}
      ></input>

      <input
        className="form-input"
        defaultValue={formdata.email}
        placeholder="Email"
        name="email"
        onChange={(e) => {
          setUpdateForm((prev)=> { return {...prev, [e.target.name]: e.target.value }})
        }}
      ></input>
      </Grid>
<Grid className="d-flex justify-content-center" container spacing={2}>
<select
        className="form-input"
        name="represents_company"
        id="represents_company"
        value={formdata.represents_company}
        onChange={(e) => {
          setUpdateForm((prev)=> { return {...prev, [e.target.name]: e.target.value }})
        }}
      >
        <option selected>Company</option>
        <option>8848 Digital LLP</option>
        <option>Wayne Enterprises</option>
        <option>Pro Garden Management</option>
        <option>The Lawn Guru</option>
        <option>Showbiz Pizza Place</option>
      </select>

      <select
        className="form-input"
        name="gender"
        id="gender"
        value={formdata.gender}
        onChange={(e) => {
          setUpdateForm((prev)=> { return {...prev, [e.target.name]: e.target.value }})
        }}
      >
        <option selected>Gender</option>

        <option>Male</option>
        <option>Female</option>
      </select>

</Grid>
<Grid className="d-flex justify-content-center"  container spacing={2}>
<select
        className="form-input"
        name="bank "
        id="bank"
        value={formdata.bank}
        onChange={(e) => {
          setUpdateForm((prev)=> { return {...prev, [e.target.name]: e.target.value }})
        }}
      >
        <option selected>Bank</option>

        <option>Citigroup Inc</option>
        <option>Wells Fargo</option>
        <option>Goldman Sachs</option>
        <option>Bank of America</option>
        <option>HDFC</option>
      </select>
      <select
        className="form-input"
        name="customer_type"
        id="customer_type"
        value={formdata.type}
        onChange={(e) => {
          setUpdateForm((prev)=> { return {...prev, [e.target.name]: e.target.value }})
        }}
      >
        <option selected>Customer Type</option>

        <option>Company</option>
        <option>Individual</option>
      </select>
</Grid>
<Grid className="d-flex justify-content-center"  container spacing={2}>
<select
        className="form-input"
        name="territory"
        id="territory"
        value={formdata.territory}
        onChange={(e) => {
          setUpdateForm((prev)=> { return {...prev, [e.target.name]: e.target.value }})
        }}
      >
        <option selected>Terretory</option>

        <option>East</option>
        <option>West</option>
        <option>North</option>
        <option>South</option>
      </select>
      
</Grid>
<button
        className="button-6 "
        onClick={() => {
          getName(formdata.name);
        }}
      >
        save
      </button>     
    </div>
  );
};

export default Register;
