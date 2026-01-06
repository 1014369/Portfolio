//App.jsx

import React, {useState} from 'react';

import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";


function App(){
   // const[activePage, setActivePage]=useState("home");
    return(
    <>
  < Navbar  />
    < Home />   
    < About />
    < Skills />
        
    </>
    );
}
export default App;