import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

type HomeNavbarProps = {
  onClick: (val1: string) => void;
};

const HomeNavbar = (props: HomeNavbarProps) => (
  <Navbar variant='dark'>
    <Navbar.Brand>LPH Fantasy Baseball</Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='mr-auto'>
        <Nav.Link href='#' onClick={() => props.onClick('standings')}>
          Standings
        </Nav.Link>
        <Nav.Link href='#' onClick={() => props.onClick('schedule')}>
          Schedule
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default HomeNavbar;
