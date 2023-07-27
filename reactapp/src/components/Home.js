import React,{useRef} from 'react';
import logo from './logo1.jpg';
import 'react-slideshow-image/dist/styles.css';
import {Link} from 'react-router-dom';
import {Slide} from 'react-slideshow-image';
import personLogo from './person.png';
import './Home.css';
//import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';

const Home =() => {
  const navStyle = {
    marginleft:'600px',
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
    backgroundColor:'lightred',
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
  
    
    const slideshowContainerStyle = {
      marginTop: '70px',
      marginLeft: '220px',
      marginRight: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    };
  
    const slideImages = [
      'https://res.cloudinary.com/dj3ovo6ji/image/upload/v1690192333/pexels-pixabay-63637_e0ap5b.jpg',
      'https://res.cloudinary.com/dj3ovo6ji/image/upload/v1690192797/pexels-ionix-1648349_scwxnt.jpg',
      'https://res.cloudinary.com/dj3ovo6ji/image/upload/v1690192797/pexels-andre-moura-2764989_zewffs.jpg',
      'https://res.cloudinary.com/dj3ovo6ji/image/upload/v1690192797/pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-932263_av07nj.jpg',
      'https://res.cloudinary.com/dj3ovo6ji/image/upload/v1690192339/pexels-lenin-estrada-2103864_dqeszu.jpg',
      
    ];
  
    const slideProperties = {
      duration: 1200,
      transitionDuration: 900,
      infinite: true,
      indicators: true,
      arrows: true,
      autoplay: true,
      pauseOnHover: true,
      canSwipe: true,
    };
  
    const slideContainerStyle = {
      height: '10px',
      width: '400px',
      margin: '20px 45px',
      borderRadius:'17px',
    };
  
    const slideImageStyle = {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
      borderRadius:'17px',
    };
    const titleStyle = {
      fontSize: '40px',
      lineHeight: '1.5',
      margin: '20px',
      textAlign: 'justify',
      marginLeft: '300px',
    };

    const title1Style = {
      fontSize: '30px',
      lineHeight: '1.5',
      margin: '20px',
      textAlign: 'justify',
      marginLeft: '300px',
    };

    const textStyle = {
      fontSize: '20px',
      lineHeight: '1.5',
      margin: '20px',
      textAlign: 'justify',
      marginLeft: '300px',
    };
  
    
    const footerStyle = {
      backgroundColor: 'black',
      color: 'white',
      padding: '10px 0 0 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      marginLeft:'240px',
      marginTop:'10px',
    };
  
    // const socialIconStyle = {
    //   fontSize: '24px',
    //   marginRight: '10px',
    //   color: 'lavenderblush',
    // };
   
    const slideshowRef = useRef(null);

    const formatIndianPrice = (price) => {
      const formattedPrice = price.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      });
      return formattedPrice;
    };
  
    return (
      <>
      <div style={bodyStyle}>
        <nav style={navStyle}>
          { <Link to="/home" style={linkStyle}>
            <img src="https://cdn.dribbble.com/users/77289/screenshots/7395740/toysoftheworld_1_4x.jpg" alt="Logo" style={logoStyle} />
          </Link> }
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
              Hot Wheels         
            </Link>

            <Link to ='/stuffed' className='sideBarStyle'>
              Stuffed Animals
            </Link>
            <Link to="/newborn" className='sideBarStyle'>
              New Born
            </Link>

        </div>
  
        <div style={slideshowContainerStyle}>
          <br />
          <br />
  
           <div style={slideContainerStyle}>
            <img src="https://www.newshub.co.nz/home/lifestyle/2019/11/parents-warned-to-think-twice-before-buying-kids-smart-toys-devices-for-christmas/_jcr_content/par/video/image.dynimg.1280.q75.jpg/v1574817984094/GettyImages-1017309510-toys-1120.jpg" width="400px" height="400px"/>
            {/* <Slide {...slideProperties} ref={slideshowRef}>
              {slideImages.map((image, index) => (
                <div key={index} className="each-slide">
                  <img src={image} alt={`Slide ${index + 1}`} style={slideImageStyle} />
                </div>
              ))}
            </Slide> */}
          </div> 
        </div>
        <div>
          <h1 style={titleStyle} >Welcome to Toy Kingdom</h1>
            <br></br>
            <h3 style={textStyle}>
                <br></br>
                Welcome to our Toy store website, where your child's journey<br/>
                starts with new dreams. Discover a world of toys Our products<br/>
                 will make your child joyful.<br/><br/>

                Indulge in our carefully curated selection of top-tier toy brands, each<br/>
                chosen for their commitment to quality, innovation, and results. From<br/> 
                Our toys inspire your child and make them excited.
            <br />
            <br />
          </h3> 
        </div>


        <br/><br/><br/><br/><br/><br/>

        
        
        <footer style={footerStyle}>
        <div>
          <span>&copy; 2023 Fantasy ToyLand. All rights reserved.</span>
        </div>
        {/* <div>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook style={socialIconStyle} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter style={socialIconStyle} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={socialIconStyle} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={socialIconStyle} />
          </a>
        </div> */}
      </footer>
      </div>
      </>
    );
  };
  

export default Home;