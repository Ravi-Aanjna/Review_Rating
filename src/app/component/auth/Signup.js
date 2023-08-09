import React from "react";
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './signup.css' ; 
import Imagetwocircle from '../../../app/assets/Imagetwocircle.jpeg'
import imagestar from '../../../app/assets/imagestar.jpeg'
import imagebulb from '../../../app/assets/imagebulb.jpeg'

const Signup = () => {
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

return(
    <>
    <div className="main-container">
     <div className="left-box" >
            <h1>Welcome</h1>
            <p> lorem25 lorem25 lorem25 lorem25 lorem25 lorem25 lorem25 lorem25 lorem25 </p>
            <img src={imagebulb} alt="Bulb"/>
        </div>
        <Formik 
        initialValues={defaultValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
       <form className="form-class">
        <img className="circle-img" src={Imagetwocircle} alt="Circle"/>
        <img className="star-img" src={imagestar} alt="Star"/>
        <h1>Sign Up</h1>
            <div className="all_input">
            <label htmlFor="name">FullName :</label>
            <Field name="name" placeholder="Enter Your Name"/>
                <ErrorMessage name="name" component="div"/>
            </div>
            <div>
                <label htmlFor="email">EmailID :</label>
                <Field name="email" placeholder="Enter Your Email" />
                <ErrorMessage name="email" component="div" />
            </div>
            <div>
                <label htmlFor="number">PhoneNumber :</label>
                <Field  name="number" placeholder="Enter Your Number" />
                <ErrorMessage name="number" component="div"/>
            </div>
            <div>
                <label htmlFor="city">City :</label>
                <Field  name="city" placeholder="Enter Your City" />
                <ErrorMessage name="city" component="div"/>
            </div>
            <div>
                <label htmlFor="state">State :</label>
                <Field  name="state" placeholder="Enter Your State" />
                <ErrorMessage name="state" component="div"/>
            </div>
            <button type="submit">Sign Up</button>
            <div>
        <p>I already have an account <a>Login</a></p>

            </div>
        </form>
        </Formik>

        </div>
    </>
)
}
export default Signup;