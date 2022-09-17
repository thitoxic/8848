import React from 'react'
import { Formik } from 'formik';

const Register = () => {
  return (
    <div>
       <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form>
           <input
             name="email"
             onChange={handleChange}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <select name="represents_company" id="represents_company" form="carform">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
           <input
             name="customer_name"
             onChange={handleChange}
             value={values.customer_name}
           />
           {errors.password && touched.password && errors.password}
           <select name="gender" id="gender" form="carform">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
<input
             name="address"
             onChange={handleChange}
             value={values.address}
           />
           {errors.password && touched.password && errors.password}
           <input
             name="mobile_no"
             onChange={handleChange}
             value={values.mobile_no}
           />
           {errors.password && touched.password && errors.password}
           <select name="bank" id="bank" form="carform">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
<select name="customer_type" id="customer_type" form="carform">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
<select name="territory" id="territory" form="carform">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
           <button type="submit">
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
  )
}

export default Register