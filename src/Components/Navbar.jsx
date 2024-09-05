import React from 'react';
import Logocolor from './Assets/Hello Doctor Logo-02.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from 'react-bootstrap/Button';


function TopNavbar({ cartCount }) {
  return (
    <Container fluid className='TopNavbar g-0'>
    <Navbar variant="dark" expand="lg" className='topnavbar px-4'>
      <Link to="/dashboard"> <img src={Logocolor} alt="logo" height={56} /> </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          
          <Nav.Link>
          <ShoppingCartIcon className='text-light' />
          </Nav.Link>
          <Link to="/HelloDoctor-reactapp"> <Button><LogoutIcon fontSize='small' /> Signout </Button></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
  );
}

export default TopNavbar;
