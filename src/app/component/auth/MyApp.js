import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function MyApp(){
    const [userData,setUSerData]=useState([]);

    return(
        <div>
            <Router>
            <Routes>

                <Route path="/about" component={About}  />
                {/* <Route path="/login" component={Login}  /> */}
                {/* <Route path="/signup" component={Signup}  /> */}
                <Route path="/about" component={Home}  />
                <Route path="/navbar" component={Navbar}  />
                <Route path="/contact" component={Contact}  />
            </Routes>
            </Router>
        </div>
    )
} 

export default MyApp;