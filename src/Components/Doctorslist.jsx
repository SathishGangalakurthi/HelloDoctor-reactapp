import React from 'react';
import Button from 'react-bootstrap/Button';
import { DoctorDetails } from '../Data/Doctors';

function Doctorslist() {
  return (
    <div className="maincard">
        {
        DoctorDetails.map((item)=>{
            return(
                <div className="card">
                    <div className="card-body">
                        <img src={item.Doctorimage} alt="doctorimage" className="doctorimage" />
                        <h3>{item.DoctorName}</h3>
                        <p>{item.Qualification}</p>
                        <p>{item.Experience}</p>
                        <p>{"Consultation Fee: " +item.Fee}</p>
                        <Button variant="primary">Consult Now</Button>
                    </div>
                </div>
            )
            })
        }
    </div>
    )
}

export default Doctorslist
