import React from "react";
import {Link,Outlet} from 'react-router-dom'

function About(){
    return(
        <div>
        <h1>This is About Page</h1>
        <Link to="Home">Home</Link>
        <Link to="Singup">Signup</Link>
        <Link to="Contact">Signup</Link>
        <Outlet></Outlet>
        </div>
    );
}
export default About;