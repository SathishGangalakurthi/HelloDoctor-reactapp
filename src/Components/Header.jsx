import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BiotechIcon from '@mui/icons-material/Biotech';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';


function Header() {
  return (
    <Col md={2} className="sticky-header mt-5">
      <ul className="list-group mt-5 px-3">
        <Link to="/dashboard" style={{ textDecoration: 'none'}}><li className="list-group-item"><DashboardIcon className='testcard-icon'  fontSize="small" />&nbsp; Dashboard</li></Link>
        
        <Link to="/consultdoctor" style={{ textDecoration: 'none' }}><li className="list-group-item"><LocalHospitalIcon className='testcard-icon'  fontSize="small" />&nbsp; Consult a Doctor</li></Link>
        
        <Link to="/booktest" style={{ textDecoration: 'none'}}><li className="list-group-item"><BiotechIcon className='testcard-icon'  fontSize="small" />&nbsp; Book a Test</li></Link>

      </ul>
    </Col>                             
  )
}

export default Header
