import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import './styles.css'


function Header({login}) {
    console.log(login)
    return (
        <div>
        <Navbar bg="dark" variant="dark" className="nav">
            <Navbar.Brand href="#home">Book Reader</Navbar.Brand>
            {login ? 
            (<div className="nav-btn">
                log out
            </div>)
             : 
             (<div className="nav-btn">
                <ul>
                    <li>Sign In</li>
                    <li>Register</li>
                </ul>
            </div>)}
        </Navbar>
        </div>
    )
}

export default Header

