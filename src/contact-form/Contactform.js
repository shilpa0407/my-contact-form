import React, { useState} from "react";
import {Form , Button} from 'semantic-ui-react';
import "./Contactform.css"

const Contactform = (props) => {
  const initialValues = {
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

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regex2 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;

    if (!values.firstname) {
      errors.firstname = "*this field is required";
    } else if (values.firstname.length > 25) {
      errors.firstname = "* this field is required";
    }
    if (!values.lastname) {
      errors.lastname = "*this field is required";
    } else if (values.lastname.length > 25) {
      errors.lastname = "* this field is required";
    }
    if (!values.company) {
      errors.company = "*this field is required";
    } else if (values.company.length > 50) {
      errors.company = "* this field is required";
    }
    if (!values.email) {
      errors.email = "*this field is required";
    } else if (!regex1.test(values.email)) {
      errors.email = "this field is required";
    }
    if (!values.password) {
      errors.password = "*this field is required";
    } else if (!regex2.test(values.password)) {
      errors.password =
        "password must be between 6-15 character which consist atleast one 1-10, a-z, @$*!+";
    }
    if (!values.confirm_password) {
      errors.confirm_password = "*this field is required";
    } else if (values.confirm_password !== values.password) {
      errors.confirm_password = "*password did not match";
    }
    if (!values.address) {
      errors.address = "*this field is required";
    } else if (values.address.length > 50) {
      errors.address = "* character limit exceeded";
    }
    if (!values.city) {
      errors.city = "*this field is required";
    } else if (values.city.length > 50) {
      errors.city = "* character limit exceeded";
    }
    if (!values.state) {
      errors.state = "*this field is required";
    } else if (values.state.length > 50) {
      errors.state = "* character limit exceeded";
    }
    return errors;
  };

  const handleClear = () => {
    setFormValues(initialValues);
  };

  return (
   
      <Form onSubmit={handleSubmit} className="create-form">
        <h1>CONTACT FORM</h1>
          <Form.Field  className="fname">
          
            <label for="firstname"><span>Firstname</span>
            <input
              type="text"
              name="firstname"
              placeholder="firstname"
              value={formValues.firstname}
              onChange={handleChange}/>
            <p>{formErrors.firstname}</p>
            </label>
            </Form.Field>
          
          <Form.Field className="lname">
            <label for= "lastName"><span>Lastname</span>
            <input
              type="text"
              name="lastname"
              placeholder="lastname"
              value={formValues.lastname}
              onChange={handleChange}
            />
            <p>{formErrors.lastname}</p>
            </label>
            </Form.Field>
       
            <Form.Field className="company">
          <label for="company"><span>Company</span>
          <input
            type="text"
            name="company"
            placeholder="company"
            value={formValues.company}
            onChange={handleChange}
          /> 
        <p>{formErrors.company}</p>
        </label>
        </Form.Field>

        <Form.Field className="email">
          <label for="email"><span>Email Address</span>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formValues.email}
            onChange={handleChange}
          />
        <p>{formErrors.email}</p>
        </label>
        </Form.Field>

        <Form.Field className="pass">
            <label for="password"><span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p>{formErrors.password}</p>
            </label>
          </Form.Field>

          <Form.Field  className="conpass">
            <label for="conpassword"><span>Confirm Password</span>
            <input
              type="password"
              name="confirm_password"
              placeholder="confirm password"
              value={formValues.confirm_password}
              onChange={handleChange}/>
            <p>{formErrors.confirm_password}</p>
            </label>
            </Form.Field>

            <Form.Field className="adress">
          <label for="address"><span>Address</span>
          <input
            type="text"
            name="address"
            placeholder="address"
            value={formValues.address}
            onChange={handleChange}
          />
           <p>{formErrors.address}</p>
           </label>
          </Form.Field>
       

        <Form.Field className="city">
            <label for="city"><span>City</span>
            <input
              type="text"
              name="city"
              placeholder="city"
              value={formValues.city}
              onChange={handleChange}
            />
            <p>{formErrors.city}</p>
            </label>
            </Form.Field>

            <Form.Field className="state"> 
            <label for="state"><span>State</span>
            <input
              type="text"
              name="state"
              placeholder="state"
              value={formValues.state}
              onChange={handleChange}
            />
            <p>{formErrors.state}</p>
            </label>
            </Form.Field>
            

        
        <div className="btn">

        <Button className="btn1" style={{marginRight: "16px"}}
            onClick={
              Object.keys(formErrors).length === 0 &&
              isSubmit &&
              (() => props.previewHandler(formValues)) }>Preview
          </Button>

          <Button className="btn2" style={{marginRight: "16px"}}
            onClick={
              Object.keys(formErrors).length === 0 &&
              isSubmit &&
              (()=> props.valuehandler(formValues))} > Add
          </Button>

          <Button className="btn3">
          <a className="a" href="" onClick={handleClear}>
            Clear
          </a>
          </Button>
          </div>
      </Form>
  
    
  );
};

export default  Contactform;