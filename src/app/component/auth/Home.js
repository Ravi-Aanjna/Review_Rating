import React from "react";
import {Link,Outlet} from 'react-router-dom'

function Home(){
    return(
        <div>
        <h1>This is Home Page</h1>
        <Link to="About">About</Link>
        <Link to="Singup">Signup</Link>
        <Link to="Contact">Signup</Link>
        <Outlet></Outlet>
        </div>
    );
}
export default Home;