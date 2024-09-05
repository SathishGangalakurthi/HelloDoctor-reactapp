import React from 'react'
import Header from './Header';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import TimerIcon from '@mui/icons-material/Timer';
import Doctorimage from './Assets/Doctorimages/Doctorimage-5.jpg';
import PatientHealthChart from './Charts/PatientHealthChart';
import Mealchart from './Charts/Mealchart';
import TopNavbar from './Navbar';

function Dashboard() {
  return (
    <div>
      <TopNavbar />
      <Container fluid>
    <Row>
      <Col md={2} >
      <Header />
      </Col>
      <Col md={10} className='content'>
          <Row className='mt-3' >
            <Col md={9}>
              <Row>
                <Col>
                <div className="welcome-card-body">
                  <h3 className="card-title">Welcome to <strong className='Heading'>HelloDoctor!</strong></h3>
                  <p className="card-text">
                    Get your latest updates of this month
                  </p>
                 <Link to="/Consultdoctor"> <Button>Connect to Doctor <ArrowForwardIcon fontSize='small' /> </Button></Link>
                </div>
                </Col>
              </Row>
              <Row className='mt-3'>
                <Col md={4} className='dashboardallcards'>
                <Card className='dashboardcard1 '>
                  <Card.Body>
                  <div>
                  <MonitorHeartIcon fontSize='large' className="cardicon1"/>
                  </div>
                  <div>
                    <h3 className='my-2'>Heart Rate</h3>
                    <h6>80 BPm</h6>
                    </div>
                  </Card.Body>
                </Card>
                </Col>
                <Col md={4} className='dashboardallcards'>
                <Card className='dashboardcard2 '>
                  <Card.Body>
                  <div>
                  <BloodtypeIcon fontSize='large' className="cardicon1"/>
                  </div>
                  <div>
                    <h3 className='my-2'>Blood Pressure</h3>
                    <h6>120/80 mmHG</h6>
                    </div>
                  </Card.Body>
                </Card>
                </Col>
                <Col md={4} className='dashboardallcards'>
                <Card className='dashboardcard3 '>
                  <Card.Body>
                  <div>
                  <HealthAndSafetyIcon fontSize='large' className="cardicon1"/>
                  </div>
                  <div>
                    <h3 className='my-2'>Glucose Level</h3>
                    <h6>60 - 80 mg/dl</h6>
                    </div>
                  </Card.Body>
                </Card>
                </Col>
              </Row>
            </Col>
            <Col md={3}>
            <div className='Schedule-module p-3 pt-4'>
              <h5 className='text-center'>Scheduled Appointment</h5>
              <p className='checkuptype'>Routine Checkup</p>
              <div className='d-flex justify-content-between align-items-center mt-4 mb-3'>
              <img src={Doctorimage} alt='docimage' className='doc-image img-fluid' />
              <div>
              <h4>Dr. S. Sreekala</h4>
              <h6>General Medicine</h6>
              </div>
              </div>
              <div className='Scheduletiming d-flex justify-content-between align-items-center'>
                <p> 10:00am - 10:30am </p>
                <p> <TimerIcon fontSize='small' /> Starts in 45min</p>
              </div>
              <p></p>
              <Button>Edit Consult <ArrowForwardIcon fontSize='small' /></Button>
            </div>
            </Col>
          </Row>
          <Row className='g-4 my-2'>
              <Col md={7}>
              <div className='dashboardblock3 text-dark p-3 mx-1'>
                <h4>Patient Health Record:</h4>

                <PatientHealthChart/>
              </div>
              </Col>
              <Col md={5}>
              <div className='dashboardblock4 text-dark p-3 mx-1'>
                <h4>Your Diet Plan:</h4>
                <Mealchart />
              </div>
              </Col>
          </Row>
      </Col>
    </Row>
    </Container>
  </div>
  )
}

export default Dashboard
