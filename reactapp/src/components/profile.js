import React from 'react';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './profile.css';

const Profile = () => {
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
        marginLeft: '700px',
        marginTop: ' 85px',
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
                    <Link to="/transformer" className='sideBarStyle'>
                    Transformers
                    </Link>
                    <Link to="/hotwheels" className='sideBarStyle'>
                    Hot Wheels         
                    </Link>
                    <Link to="/lego" className='sideBarStyle'>
                    Lego
                    </Link>
                    <Link to ='/stuffed' className='sideBarStyle'>
                    Stuffed Animals
                    </Link>
                    <Link to="/newborn" className='sideBarStyle'>
                    New Born
                    </Link>
                </div>

                <h1 style={titleStyle}>User - Profile </h1>
                <br/>
                <div className="account-container">    
                    <div className="account-info">
                        <h3 className="section-heading">Account Information</h3>
                        <div className="info-row">
                            <span className="info-label">Username:</span>
                            <span className="info-value">Dharaneesh</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Date of Birth:</span>
                            <span className="info-value">Aug 11,2003</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Address:</span>
                            <span className="info-value">Coimbatore,Tamil Nadu.</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Mail:</span>
                            <span className="info-value">admin@gmail.com</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Phone:</span>
                            <span className="info-value">+91 993986934</span>
                        </div>
                        <div className="info-row">
                            <span className="info-label">Additional Phone:</span>
                            <span className="info-value"> 9360350644 </span>
                        </div>
                        <div className="info-row">
                            <span className="info-label"></span>
                            <span className="info-value"></span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
export default Profile