import React from 'react';
import Logo from './Assets/Hello Doctor Logo-02.png';
import Forgotimage from './Assets/forgotimage.jpg';
import { Link } from 'react-router-dom';
function Forgot() {
  return (
    <div className="container-fluid vh-100">
    <div className="row h-100">
        <div className="col-md-8 d-none d-md-block p-0">
            <div
                style={{
                    backgroundImage: `url(${Forgotimage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%'
                }}
            ></div>
        </div>

        {/* Right side with the login form */}
        <div className="col-md-4 d-flex justify-content-center align-items-center formbg">
            <div className="login-form w-75">
            <div className="d-flex justify-content-center mb-5"><img src={Logo} alt="Logo" className='img-fluid w-50 mb-3' /></div>
                <h3 className="text-center mb-3">Reset Your Account</h3>
                <form>
                <div className="text-start mt-3">
                    <p style={{ fontSize: '14px' }}>Enter the email address associated with your account and we'll send you a link to reset your password.</p>
                </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label mb-0">Email:</label>
                        <input type="text" className="form-control" placeholder="Enter your Email"/>
                    </div>
                    <Link to="/dashboard"> <button type="submit" className="btn btn-primary w-100">Reset</button></Link>
                </form>
                <div className="text-center mt-3">
                <p>Don't have an account?<Link to="/signup" className="signuplink"> Sign up</Link></p>
                </div>
            </div>
        </div>            
    </div>
</div>
  )
}

export default Forgot
