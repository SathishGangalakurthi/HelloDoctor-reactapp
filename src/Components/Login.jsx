import React from 'react';
import Logo from './Assets/Hello Doctor Logo-02.png';
import Loginimage from './Assets/loginimage.jpg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container-fluid vh-100">
        <div className="row h-100">
            <div className="col-md-8 d-none d-md-block p-0">
                <div
                    style={{
                        backgroundImage: `url(${Loginimage})`,
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
                    <h3 className="text-center mb-3">Login</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label mb-0">Username:</label>
                            <input type="text" className="form-control" placeholder="Enter your username" required />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="password" className="form-label mb-0">Password:</label>
                            <input type="password" className="form-control" placeholder="Enter your password" required />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input"/>
                            <label className="form-check-label">Remember Me</label>
                        </div>
                        <Link to="/dashboard"> <button type="submit" className="btn btn-primary w-100">Login</button></Link>
                    </form>
                    <div className="text-start mt-3">
                    <p className="text-decoration-none">Forgot Username/Password?<Link to="/forgot" className="forgotlink "> Click here</Link></p>
                    </div>
                    <div className="text-start mt-3">
                    <p>Don't have an account?<Link to="/signup" className="signuplink "> Sign up</Link></p>
                    </div>
                </div>
            </div>            
        </div>
    </div>
);
}

export default Login;
