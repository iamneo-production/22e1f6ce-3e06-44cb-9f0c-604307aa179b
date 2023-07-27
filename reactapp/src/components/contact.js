import React from 'react';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './contact.css';
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';

const Contact = () => {
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
    
    const titleStyle = {
        fontSize: '40px',
        lineHeight: '1.5',
        margin: '20px',
        textAlign: 'justify',
        marginLeft: '750px',
        marginTop: ' 85px',
      };
      
      const handleRedirect = (url) => {
        window.location.href = url;
      };

    return(

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
                    <h2><b>CATEGORIES</b></h2>
                    <Link to="/wood" className='sideBarStyle'>
                    Woodentoys
                    </Link>
                    
                    <Link to="/hotwheels" className='sideBarStyle'>
                Plastic Toys       
                    </Link>
                  
                    <Link to ='/stuffed' className='sideBarStyle'>
                    Stuffed Animals
                    </Link>
                    <Link to="/newborn" className='sideBarStyle'>
                    New Born
                    </Link>
                </div>

                <h1 style={titleStyle}>Contact Us </h1>
                <br/>
                <div className="account-container">    
                    <div className="account-info">
                        <div className="info-row">
                            <span className="info-label">Facebook:</span>
                            <button className="info-value">Toys World</button>
                            <div>
                            <button className='social-media-icons'onClick={() => handleRedirect('https://www.facebook.com')}>
                                <FaFacebook/>
                            </button>
                            </div>
                        </div>
                        <br/>
                        <div className="info-row">
                            <span className="info-label">Twitter:</span>
                            <button className="info-value" onClick={() => handleRedirect('https://www.twitter.com')}>Toys World</button>
                            <div>
                            <button className='social-media-icons' onClick={() => handleRedirect('https://www.twitter.com')}>
                                <FaTwitter/>
                            </button>
                            </div>
                        </div>
                        <br/>
                        <div className="info-row">
                            <span className="info-label">Instagram:</span>
                            <button className="info-value" onClick={() => handleRedirect('https://www.instagram.com')}>Toys world</button>
                            <div>
                            <button className='social-media-icons' onClick={() => handleRedirect('https://www.instagram.com')}>
                                <FaInstagram/> 
                            </button>
                            </div>
                        </div>
                        <br/>
                        <div className="info-row">
                            <span className="info-label">Linked-in:</span>
                            <button onClick={() => handleRedirect('https://www.linkedin.com')} className="info-value">Toys World</button>
                            <div className='icon-bg'>
                            <button className='social-media-icons' onClick={() => handleRedirect('https://www.linkedin.com')}>
                               <FaLinkedin/>
                            </button>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact