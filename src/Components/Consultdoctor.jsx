import React from 'react';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import { DoctorDetails } from '../Data/Doctors';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import TopNavbar from './Navbar';



function Consultdoctor() {
  return (
    <div>
      <TopNavbar/>
      <Container fluid >
      <Row>
        <Col md={2}>
        <Header />
        </Col>
        <Col md={10} className='content'>
          <h4><NavigateNextIcon  fontSize="medium"/> Consult a Doctor</h4>
          <div className="maincard">
            {
            DoctorDetails.map((item)=>{
              return(
                <div class="doctorcard mx-3 my-3">
                  <img src={item.Doctorimage} className="p-2 " alt="Card-Image" />
                  <div className='px-2'>
                  <h5>{item.name}</h5>
                  <p>{item.qualifications}</p>
                  <p>{"Department: " +item.department}</p>
                  <p>{"Experience: " + item.Experience}</p>
                  </div>
                  <div className="d-flex justify-content-between px-2 mb-2">
                    <div>
                      <p className="feetext m-0">Fee:</p>
                      <p className="m-0">{item.Fee}</p>
                    </div>
                    <div >
                    <Link to={`/consultdoctor/${item.id}`}><Button><VisibilityIcon fontSize='small' /></Button></Link>
                    <Button className='mx-1'>Consult Now</Button>
                    </div>
                  </div>
                </div>
                )
              })
            }
            </div>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Consultdoctor