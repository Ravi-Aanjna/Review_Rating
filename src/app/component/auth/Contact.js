import React from "react";
import {Link,Outlet} from 'react-router-dom'

function Contact(){
    return(
        <div>
        <h1>This is Contact Page</h1>
        <Link to="Home">Home</Link>
        <Link to="Singup">Signup</Link>
        <Link to="Contact">Contact</Link>
        <Outlet></Outlet>
        </div>
    );
}
export default Contact;