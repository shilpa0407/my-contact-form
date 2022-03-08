import React from "react"
import "./Contactform.css"
import { Formik ,Form, Field, ErrorMessage} from "formik";
import * as yup from "yup"


const Contactform = (props) => {

  const formInitialSchema = {
    firstname: "",
    lastname: "",
    company: "",
    email: "",
    password: "",
    confirm_password: "",
    address: "",
    city: "",
    state: "",
  };


  const handleFormSubmit = (values) => {
    console.log("Submitted values", values)
}
  const handleClear = () => {
    window.location.reload(false);
};

  const formvalidationSchema = yup.object().shape({
    firstname: yup.string().required("plese enter your firstname")
    .min(2,"firstname is too short").max(25,"firstname too long"),

    lastname: yup.string().required("plese enter your lastname")
    .min(2,"lastname is too short").max(25,"lastname too long"),

    company: yup.string().required("plese enter your comapny name")
    .max(50,"should not be greater than 50 chars"),

    email: yup.string().required("plese enter your email")
    .email("plese enter valid email").max(50,"email should not be greater than 50 chars"),

    password: yup.string().required("password is reqired")
    .min(8, "Password is too short - should be 8 chars minimum")
    .max(15,"password should not be greater that 15 charecters")

    .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/,
    "password must be between 8-15 character which consist atleast one 1-10, a-z, @$*!+"),

    confirm_password: yup.string().oneOf([yup.ref('password')], "Passwords did not match")
    .required('Confirm Password is required'),

    address: yup.string().required("plese enter address")
    .max(75, "address should not be greater than 75 chars"),

    city: yup.string().required("plese enter your city")
    .max(50, " city should not be greter than 50 chars"),

    state: yup.string().required("plese enter your state")
    .max(25,"state should not be greter than 25 chars"),
  });
   

  return (
    <>
    <div className="create-form">
    <Formik initialValues={formInitialSchema}
     validationSchema = {formvalidationSchema}  
     onSubmit={(values => handleFormSubmit(values))}>
    {({ errors, handleChange, isValid, isSubmitting, values}) =>(
    
      <Form >
      <div className="main">
        <h3 className="h1">CONTACT FORM</h3>
          <div className="firstname">
            <label for="firstname"><span>Firstname</span>
            <Field
              type="text"
              name="firstname"
              placeholder="firstname" className ="fname" />
            <p><ErrorMessage name = "firstname"/></p>
            </label>
            </div>
          
        <div className="lastname">
            <label for= "lastName"><span>Lastname</span>
            <Field
              type="text"
              name="lastname"
              placeholder="lastname" className ="lname" />
             <p><ErrorMessage name = "lastname"/></p>
            </label>
            </div>
       
         <div className="company">   
          <label for="company"><span>Company</span>
          <Field
            type="text"
            name="company"
            placeholder="company" className ="comp"  /> 
         <p><ErrorMessage name = "company" /></p>
        </label>
        </div><br></br>

        <div className="email">
          <label for="email"><span>Email Address</span>
          <Field
            type="email"
            name="email"
            placeholder="email" className ="eml"  />
      <p><ErrorMessage name = "email" /></p>
        </label> 
        </div><br></br>
        

     <div className="passoWord">
            <label for="password"><span>Password</span>
            <Field
              type="password"
              name="password"
              placeholder="password" className ="pass" />
             <p><ErrorMessage name = "password" /></p>
            </label>
             </div>
         

     <div className="conpassword">
            <label for="conpassword"><span>Confirm Password</span>
            <Field
              type="password"
              name="confirm_password"
              placeholder="confirm password" className ="conpass"/>
           <p><ErrorMessage name = "confirm_password" /></p>
            </label> 
            </div>
           
<div className="address">
          <label for="address"><span>Address</span>
          <Field
            type="text"
            name="address"
            placeholder="address" className ="addr"  />
             <p><ErrorMessage name = "address" /></p>
           </label>
            </div>

         <div className="city">
            <label for="city"><span>City</span>
            <Field
              type="text"
              name="city"
              placeholder="city" className ="cit"  />
             <p><ErrorMessage name = "city" /></p>
            </label>
             </div>

          <div className="state">
            <label for="state"><span>State</span>
            <Field
              type="text"
              name="state"
              placeholder="state"  className ="stat"/>
              <p><ErrorMessage name = "state"/></p>
            </label>
             </div>

             <div className="btn">
          <button type="submit"  onClick={ (() => props.previewHandler(values))}
          className="btn1"> preview</button>
          
  
          <button  onClick = {(() => props.valuehandler(values))}
           className="btn2"> Add</button>
        
        <button className="btn3" onClick={handleClear}>  Clear </button>
        </div>
            </div>
      </Form>
    )
    }
      </Formik>
      </div>
      </>
  );
  }

export default  Contactform;