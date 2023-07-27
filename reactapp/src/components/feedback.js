import React, { useState } from 'react';
import './feedback.css';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from './api1';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';

const Feedback = () => {
const[formdata,setFormdata]= useState({
    email: '',
    name: '',
    subject: '',
    message: ''
   
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value })
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await addFeedback(formdata);
      navigate('/home')
    }
    catch(error){
      console.log(error);
    }

    console.log(formdata);
  }

const navStyle = {
  backgroundColor: '#00aaff',
  color: 'white',
  padding: '1px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 9999,
};
const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 10px',
  padding: '4px 20px',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease, color 0.3s ease',
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const logoStyle = {
  width: '250px',
  height: '70px',
};

const personLogoStyle = {
  width: '60px',
  height: '60px',
  marginRight: '30px',
  marginLeft:'20px',
};


const sidebarStyle = {
  backgroundColor: '#00aaff',
  padding: '23px',
  width: '200px',
  position: 'fixed',
  top: '50px',
  left: 0,
  bottom: 0,
};

const bodyStyle = {
  backgroundColor:'white',
  fontFamily: 'Segoe UI',
};


const titleStyle = {
  fontSize: '40px',
  lineHeight: '1.5',
  margin: '20px',
  textAlign: 'justify',
  marginLeft: '750px',
  marginTop: ' 85px',
};
  
    return (
      <>
            <div style={bodyStyle}>
            <nav style={navStyle}>
            <Link to="/home" style={linkStyle}>
          <img src="https://cdn.dribbble.com/users/77289/screenshots/7395740/toysoftheworld_1_4x.jpg" alt="Logo" style={logoStyle} />
        </Link>
        <div style={containerStyle}>
          <Link to="/home" className='navBarStyle'>
            Home
          </Link>
          <Link to="/cart" className='navBarStyle'>
            Cart
          </Link>
          <Link to="/contact" className='navBarStyle'>
            Contact
          </Link>
          <Link to="/feedback" className='navBarStyle'>
              Feedback
            </Link>
          <Link to="/" className='navBarStyle'>
            Logout
          </Link>
          <Link to="/profile" style={linkStyle}>
              <img src={personLogo} alt="Person" style={personLogoStyle} />
            </Link>
        </div>
      </nav>
      <div style={sidebarStyle}>
        <br />
        <h2>
          <b>CATEGORIES</b>
        </h2>
        <Link to="/wood" className='sideBarStyle'>
              Woodentoys
            </Link>
           
            <Link to="/hotwheels" className='sideBarStyle'>
              Plastic toys        
            </Link>
          
            <Link to ='/stuffed' className='sideBarStyle'>
              Stuffed Animals
            </Link>
            <Link to="/newborn" className='sideBarStyle'>
              New Born
            </Link>
                </div>
                <div className='body1'>
                  <div className='class1'>
                    <form onSubmit={handleSubmit} className='form1' >
                      <h2 className='section-heading'>FEEDBACK FORM</h2>
                      <div className="feedback-container">
                        <label className='name1'>Email:</label>
                        <div>
                          <input
                          type="email"
                          placeholder="Email"
                          id='email'
                          onChange={handleChange}
                          required
                          />
                        </div>
                        <label className='name1'>Name:</label>
                        <div>
                          <input
                            type="name"
                            placeholder="Name"
                            id='name'
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <label className='name1'>Subject:</label>
                        <div>
                          <input
                            type="name"
                            placeholder="Subject"
                            id='subject'
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <label className='name1'>Message:</label>
                        <div>
                          <input
                            type="name"
                            placeholder="Message"
                            id='message'
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="button">
                            <button type='submit' onChange={handleSubmit}>Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                
                <br/>
            </div>
        </>
    
          
  );
};

export default Feedback;