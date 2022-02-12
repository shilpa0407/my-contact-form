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
    <div className="container">
      <Form onSubmit={handleSubmit} className = "create-form">
        <h1>CONTACT FORM</h1>
          <Form.Field  className="fname">
            <label>Firstname</label>
            <input
              type="text"
              name="firstname"
              placeholder="firstname"
              value={formValues.firstname}
              onChange={handleChange}
            />
            <p>{formErrors.firstname}</p></Form.Field>
          
          <Form.Field className="lname">
            <label>Lastname</label>
            <input
              type="text"
              name="lastname"
              placeholder="lastname"
              value={formValues.lastname}
              onChange={handleChange}
            />
            <p>{formErrors.lastname}</p>
            </Form.Field>
       
            <Form.Field>
          <label>Company</label>
          <input
            type="text"
            name="company"
            placeholder="company"
            value={formValues.company}
            onChange={handleChange}
          /> 
        <p>{formErrors.company}</p>
        </Form.Field>
        <Form.Field>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formValues.email}
            onChange={handleChange}
          />
        <p>{formErrors.email}</p>
        </Form.Field>

        <Form.Field className="pass">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <p>{formErrors.password}</p>
          </Form.Field>
          <Form.Field  className="conpass">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              placeholder="confirm password"
              value={formValues.confirm_password}
              onChange={handleChange}
            />
            <p>{formErrors.confirm_password}</p>
            </Form.Field>
            <Form.Field>
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="address"
            value={formValues.address}
            onChange={handleChange}
          />
          </Form.Field>
        <p>{formErrors.address}</p>

        <Form.Field>
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="city"
              value={formValues.city}
              onChange={handleChange}
            />
            <p>{formErrors.city}</p>
            </Form.Field>
            <Form.Field>
            <label>State</label>
            <input
              type="text"
              name="state"
              placeholder="state"
              value={formValues.state}
              onChange={handleChange}
            />
            <p>{formErrors.state}</p>
            </Form.Field>
        <div>
        <Button
            onClick={
              Object.keys(formErrors).length === 0 &&
              isSubmit &&
              (() => props.previewHandler(formValues))
            }
          >
            Preview
          </Button>
          <Button
            onClick={
              Object.keys(formErrors).length === 0 &&
              isSubmit &&
              (() => props.valuehandler(formValues))
            }
          >
            Add
          </Button>
       
          <a className="a" href="" onClick={handleClear}>
            Clear
          </a>
        </div>
      </Form>
    </div>
  );
};

export default  Contactform;