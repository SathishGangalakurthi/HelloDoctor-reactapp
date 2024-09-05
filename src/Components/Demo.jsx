import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import './Demo.css'

function App() {
  return (
    <div className="App">
      {/* Top Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid>
        <Row>
          {/* Sticky Left Header */}
          <Col md={2} className="sticky-header">
            <h2>Sticky Header</h2>
            <ul className="list-group">
              <li className="list-group-item">Link 1</li>
              <li className="list-group-item">Link 2</li>
              <li className="list-group-item">Link 3</li>
              <li className="list-group-item">Link 4</li>
              <li className="list-group-item">Link 5</li>
            </ul>
          </Col>

          {/* Main Content Area */}
          <Col md={10} className="content">
            <h1>Main Content Area</h1>
            <p>This is the main content area. Scroll down to see the sticky header and top navbar effect.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Nulla facilisi. Ut sed augue ut lacus dapibus posuere nec nec magna. Sed non nulla nec libero dignissim cursus. Suspendisse id ligula ut orci elementum bibendum. In non leo at justo interdum congue.</p>
            <p>...</p> {/* Repeat this to create enough content for scrolling */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
