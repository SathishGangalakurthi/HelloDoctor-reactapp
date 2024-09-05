import React from 'react';
import { useParams } from 'react-router-dom'
import { DoctorDetails } from '../Data/Doctors';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Header from './Header';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TopNavbar from './Navbar';


function DoctorProfile() {
    const {id} = useParams()
    const dataVal = DoctorDetails.find((e)=>e.id === id);
    //console.log(id)

  return (
    <>
      <TopNavbar/>
      <Container fluid >
      <Row>
        <Col md={2} >
        <Header />
        </Col>
        <Col md={10} className='content'>
        <div className='text-center pb-4'>
        <h1 >{dataVal.name}</h1>
        <p>{dataVal.qualifications}</p>
        <hr/>
        </div>
                <Row className='px-4 align-items-center'>
                  <Col md={4}>
                  <img src={dataVal.Doctorimage} alt="Doctor" className="img-fluid rounded-circle mb-3" /> 
                  </Col>
                  <Col md={8} className='doctordetails'>
                    <p>{"Designation: " + dataVal.designation}</p>
                    <p>{"Department: " + dataVal.department}</p>
                    <p>{"Years of Experience: " + dataVal.Experience}</p> 
                    <hr/>
                    <div className='d-flex'>
                    <AccountCircleIcon fontSize='medium' /> <h5> Details:</h5>
                    </div>
                    <p>{dataVal.details}</p>
                    <p>{dataVal.paragraph}</p>
                    <button className='mt-1'>Book Appointment</button>
                  </Col>
                </Row>
        </Col>
      </Row>
      </Container>
    </>
  );
}

export default DoctorProfile