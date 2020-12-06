import React from 'react'
import {Link} from 'react-router-dom';
import logo from './logo3.png';

function Header(){
     return (

        <header style={headerStyle}>
        
  <img  className="hlogo" src={logo} width="50px" left="0" />
  
            <h1 className="head">KlothIt</h1>
            <Link style= {linkstyle} to = "/" >Home</Link> | <Link style= {linkstyle}  to= "/about">About</Link>
        </header>



     )


}

const headerStyle = {

    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'


}

const linkstyle = {
    color: '#fff',
    textDecoration: 'none'


}


export default Header; 

