import React from 'react';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './products.css';

const Transformers = () => {
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
      };
    const Products1 = [
      {
        name: "Transformers Legacy Voyager G2 Universe",
        image: "https://images-cdn.ubuy.co.in/633dcfb7ac77b24a9274003b-transformers-toys-generations-legacy.jpg",
        price: 2359,
      },
      {
        name: "Transformers: Rise of the Beasts",
        image: "https://images-cdn.ubuy.co.in/6440e846f8ad4b2a854c3dce-transformers-rise-of-the-beasts-movie.jpg",
        price: 1549,
      },
      {
        name: "Transformers Adventures Warrior",
        image: "https://images-cdn.ubuy.co.in/633ce2ce1c4a6f1d3c4c6556-transformers-bumblebee-cyberverse.jpg",
        price: 3339,
      },
      {
        name: "Transformers Dinobots Ultimate Volcanicus",
        image: "https://images-cdn.ubuy.co.in/64be9a87aa3cd24c096e6777-transformers-bumblebee-cyberverse.jpg",
        price: 4944,
      },

      {
        name:"Transformers: Legacy Velocitron Speedia 500 ",
        image:"https://images-cdn.ubuy.co.in/63c98b952aea0656df120bdd-transformers-legacy-velocitron-speedia.jpg",
        price: 6498.99,
      },
      {
        name:"TRANSFORMERS CYBERVERSE SCOUT OPTIMUS PRIME",
        image:"https://images-cdn.ubuy.co.in/633ab0a00ab43811896f7792-transformers-cyberverse-scout-optimus.jpg",
        price: 2693,
      },
      {
        name:"Transformers Legacy Velocitron Speedia",
        image:"https://images-cdn.ubuy.co.in/63cd5debce0d593bf165df56-transformers-legacy-velocitron-speedia.jpg",
        price: 4299,
      },
      {
        name:"Transformers Blitzwing Triple Changer ",
        image:"https://images-cdn.ubuy.co.in/633ac99261d328021622158b-transformers-toys-generations-legacy.jpg",
        price: 5019,
      }

    ]
  
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
          <br/><br/><br/><br/>
          <div>
            <h1 style={titleStyle}>TRANSFORMERS</h1>
            <div className='product-container'>
            {Products1.map((item, index) => (
            <div className="product-item" key={index}>
              <img src={item.image} alt={item.name} height={50} width={50}/>
              <h3 className="heading">{item.name}</h3>
              <p>Price: {formatIndianPrice(item.price)}</p>
              <div>    
                <Link to='/cart'> <button className="b">Add to Cart</button></Link>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
    
} ;
export default Transformers;