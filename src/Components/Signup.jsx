import React from 'react';
import backgroundImage from './Assets/singupimage.jpg';
import { Link } from 'react-router-dom';
import FirstPageIcon from '@mui/icons-material/FirstPage';

function Signup() {
    return (
      <div className="container-fluid vh-100">
          <div className="row h-100">
              <div className="col-md-8 d-none d-md-block p-0">
                  <div
                      style={{
                          backgroundImage: `url(${backgroundImage})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          height: '100%'
                      }}
                  >
                  </div>
              </div>

{/* Right side with the signup form */}

            <div className="col-md-4 d-flex justify-content-center align-items-center formbg">
              
                <div className="signup-form w-75">
                <Link to="/HelloDoctor-reactapp"><button className="backtologin rounded px-3 py-1 mb-3 border-2 "><FirstPageIcon fontSize="medium"  /></button></Link>
                    <div >   
                    <h3 className="text-center my-2"> Create an Account</h3>
                    </div>
                    <form>
                        <div className="mb-3">
                            <label className="form-label mb-0">Name:</label>
                            <input type="text" className="form-control" placeholder="Enter your name"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label mb-0">Email:</label>
                            <input type="email" className="form-control" placeholder="Enter your email"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label mb-0">Mobile Number:</label>
                            <input type="tel" className="form-control" placeholder="Enter your mobile number"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label mb-0">Create Password:</label>
                            <input type="password" className="form-control" placeholder="Create a password"/>
                            <small className="form-text">Password should be at least 8 characters long</small>
                        </div>
                        <div className="mb-4">
                            <label className="form-label mb-0">Confirm Password:</label>
                            <input type="password" className="form-control" placeholder="Confirm your password"/>
                        </div>
                        <Link to="/HelloDoctor-reactapp"> <button type="submit" className="btn btn-primary w-100">Sign Up!</button></Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}


export default Signup
