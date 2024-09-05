import React from 'react';
import Header from './Header';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Labtest } from '../Data/Labtest';
import Button from 'react-bootstrap/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TimerIcon from '@mui/icons-material/Timer';
import BiotechIcon from '@mui/icons-material/Biotech';
import ScienceIcon from '@mui/icons-material/Science';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import OfflinePinIcon from '@mui/icons-material/OfflinePin';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import TopNavbar from './Navbar';




function Booktest() {


  return (
    <div>
      <TopNavbar />
      <Container fluid >
      <Row>
        <Col md={2}>
        <Header />
        </Col>
        <Col md={8} className='content'>
          <div className="labtestlist">
            <h4><NavigateNextIcon  fontSize="medium"/> Our Health Care Packages</h4>
            <div className="labtestmaincard">
            {
            Labtest.map((item)=>{
              return(
                <div>
                    <div  class="labtestcard px-4 py-3 mt-4">
                          <h4><BiotechIcon className='testcard-icon' fontSize="large" /> {item.Labtest}</h4>
                          <div className="smalltext d-flex justify-content-between align-content-center mt-4">
                          <p><TimerIcon className='testcard-icon' fontSize="small" /> Reports in 24 - 48 Hours</p>
                          <p><ScienceIcon className='testcard-icon' fontSize="medium" /> {"Available at:" + item.Available}</p>
                          <p><WhatshotIcon className='testcard-icon' fontSize="medium" />{"Fasting Hours:" + item.Fasting}</p>
                          </div>
                          <div className="testdetails d-flex justify-content-between p-3 rounded">  
                          <p className="mb-0"><OfflinePinIcon fontSize='small' />{item.Testone}</p>
                          <p className="mb-0"><OfflinePinIcon fontSize='small' />{item.Testtwo}</p>
                          <p className="mb-0"><OfflinePinIcon fontSize='small' />{item.Testsincludedone}</p>
                          <p className="mb-0"><OfflinePinIcon fontSize='small' />{item.Testsincludedtwo}</p>
                          </div>
                          <div className="labtestpricebutton d-flex justify-content-between align-items-center mt-3 mb-0">
                          <div>
                          <p className="text-decoration-line-through mb-0">{item.OriginalFee}</p>
                          <h4 className="testofferprice"><strong>{item.OfferFee}</strong></h4>
                          </div>
                            <div>
                            <Button  className="removebutton px-3 py-2 mx-2"><RemoveCircleIcon fontSize="small" className="pb-1" /> Remove</Button>
                            <Button className="addbutton px-3 py-2"><AddCircleIcon fontSize="small" className="pb-1" /> Add</Button>
                            </div>
                          </div>
                          </div>
                          </div>
              )
            })
          }
          </div>
          </div>
        </Col>
        <Col md={2} className="booktest-menubar">
        <p>Find health concern tests:</p>
        <div className='scrollable-list mx-2 text-center'>
        <ul className="testtabs list-group pt-3">
          <li className="list-group-item">Diabetes</li>
          <li className="list-group-item">Pregnancy</li>
          <li className="list-group-item">Thyroid</li>
          <li className="list-group-item">Liver</li>
          <li className="list-group-item">COVID</li>
          <li className="list-group-item">Gastro</li>
          <li className="list-group-item">Cervix</li>
          <li className="list-group-item">Heart</li>
          <li className="list-group-item">Kidney</li>
          <li className="list-group-item">Cancer</li>
          <li className="list-group-item">Vitamins</li>
          <li className="list-group-item">Anemia</li>
          <li className="list-group-item">Lungs</li>
          <li className="list-group-item">Fever</li>
          <li className="list-group-item">Allergy</li>
        </ul>
        </div>
        </Col>
      </Row>
      </Container>
    </div>
  )
}

export default Booktest
