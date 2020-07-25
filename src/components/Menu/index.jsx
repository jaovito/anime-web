import React from 'react';

import {Navbar, Nav} from 'react-bootstrap'
// import { Container } from './styles';

function Menu(props) {
  return (
      <>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand >Animê</Navbar.Brand>
    <Nav className="mr-auto">
        <Nav.Link disabled={props.disabled} href="/trandings">Trandings</Nav.Link>
        <Nav.Link disabled={props.searchDisabled} href="/search">Search</Nav.Link>
    </Nav>
  </Navbar>
      </>
  );
}

export default Menu;