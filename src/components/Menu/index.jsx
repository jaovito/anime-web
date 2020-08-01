import React from 'react';

import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Menu(props) {

  return (
      <>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand >Animê</Navbar.Brand>
    <Nav className="mr-auto">
        <Nav.Link disabled={props.disabled} ><Link className={`nav-link ${props.disabled ? 'disabled' : ''}`} to="/" >Trandings</Link></Nav.Link>
        <Nav.Link disabled={props.searchDisabled}><Link className={`nav-link ${props.searchDisabled ? 'disabled' : ''}`} to='/search'>Search</Link></Nav.Link>
    </Nav>
  </Navbar>
      </>
  );
}

export default Menu;