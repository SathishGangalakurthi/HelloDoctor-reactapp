
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import Consultdoctor from './Components/Consultdoctor';
import Booktest from './Components/Booktest';
import Forgot from './Components/Forgot';
import Doctorslist from './Components/Doctorslist';
import DoctorProfile from './Components/DoctorProfile';

import TopNavbar from './Components/Navbar';

function App() {


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/header" element={<Header />} />
          <Route path="/consultdoctor" element={<Consultdoctor />} />
            <Route path='/consultdoctor/:id' element={<DoctorProfile />} />
          <Route path="/booktest" element={<Booktest />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/doctorslist" element={<Doctorslist />} />
          <Route path="/navbar" element={<TopNavbar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
