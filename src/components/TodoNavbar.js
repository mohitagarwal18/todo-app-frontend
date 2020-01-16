import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

export class TodoNavbar extends React.Component{
  render(){
    return(
      <Navbar expand="sm" variant="dark" bg="dark">
        <Navbar.Brand href="#home">Todo App</Navbar.Brand>
        <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#login">Hello, Mohit Agarwal</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

