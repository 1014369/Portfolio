//App.jsx

import React, {useState} from 'react';
import Snowfall from "react-snowfall";

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import ChangingWord from "./ChangingWord";
import Certificates from "./Certificates";
import Projects from "./Projects";


function App(){
   // const[activePage, setActivePage]=useState("home");
    return(
    <>
    
  < Navbar  />
    < Home />   
    < About />
    <h1>I am a <ChangingWord /></h1>
    < style />
    < Certificates />
    <Projects />
        
    </>
    );
}
export default App;