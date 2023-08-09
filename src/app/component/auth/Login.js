import React from "react";
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css' ; 
import Imagetwocircle from '../../../app/assets/Imagetwocircle.jpeg'
import imagestar from '../../../app/assets/imagestar.jpeg'
import imagebulb from '../../../app/assets/imagebulb.jpeg'

const Login = () => {
    //Initial Schema of Formik
    const defaultValue = {
        name:"",
        email:"",
        password:"",
    };
    
    //Validation Schema
    const validationSchema = yup.object().shape({
    
        name: yup.string().required("Please Enter Name"),
        email: yup.string().required("Please Enter Email").email("Invalid Email Formate"),
        password: yup.string().required("Please Enter Your Password"),
    });
    
    // After Handle Submit
    const handleSubmit = (values)=>{
        console.log("Values :", values);
    };
}

return(
    <>
    <h1>Welcome</h1>
    <p>lorem25</p>
    <img src={imagebulb} alt="Bulb"/>

<Formik 
initialValues={defaultValue}
validationSchema={validationSchema}
onSubmit={handleSubmit}
>
<form className="signup-form-container">
<img src={Imagetwocircle} alt="Circle"/>
<img src={imagestar} alt="Star"/>
<h1>Sign Up</h1>
    <div className="col-md-5 mt-4">
    <label htmlFor="name">FullName :</label>
    <Field name="name" placeholder="Enter Your Name"/>
        <ErrorMessage name="name" component="div"/>
    </div>
    <div>
        <label htmlFor="email">EmailID :</label>
        <Field name="email" placeholder="Enter Your Email" />
        <ErrorMessage name="email" component="div" />
    </div>
    
      
            <button type="submit">Sign Up</button>
        </form>
        </Formik>
    </>
)