import React from 'react';
import Header from './Header';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function Contact() {
  return (
    <div>
      <Container fluid >
      <Row>
        <Header />
        <Col md={10} className='content'>
        <h1>Contact</h1>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Contact
