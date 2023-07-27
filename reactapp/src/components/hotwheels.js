import React from 'react';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './products.css';

const HotWheels = () => {
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
        name: "Hot Wheels X-Men '71 Plymouth Satellite - 2018 Card",
        image: "https://toys-india.com/cdn/shop/files/71PlymouthSatelliteYellowColour_512x608.jpg?v=1688818160",
        price: 1399,
      },
      {
        name: "Hot Wheels Premium DC Comics WW84 Wonder Woman Jet - Dark Grey - 2020 Card",
        image: "https://toys-india.com/cdn/shop/files/WonderWomanJetGreyColour_512x608.jpg?v=1688813916",
        price: 1799,
      },
      {
        name: "Hot Wheels Premium Jurassic World Mercedes-Benz Unimog U 1300L - Grey - 2022 Card",
        image: "https://toys-india.com/cdn/shop/files/Mercedes-BenzUnimogU1300LSilverorRedColour_512x608.jpg?v=1688813836",
        price: 1499,
      },
      {
        name: "Hot Wheels 007 The Spy Who Loved Me Lotus Esprit S1 - White - 2015 Card",
        image: "https://toys-india.com/cdn/shop/files/LotusEspritS1WhiteColour_e78ea528-7c6e-4f80-94ea-5660118f4e29_448x608.jpg?v=1688642968",
        price: 1699,
      },
      {
        name:"Hot Wheels Teenage Mutant Ninja Turtles Party Wagon - Yellow / Green - 2021 Card",
        image:"https://toys-india.com/cdn/shop/files/PartyWagonYellowColour_0064c6e1-bbc6-4b10-85f3-d97c505bb1a5_512x608.jpg?v=1688632376",
        price: 1999,
      },
      {
        name:"Hot Wheels Premium Marvel Deadpool Scooter - Yellow - 2022 Card",
        image:"https://toys-india.com/cdn/shop/files/DeadpoolScooterYellowColour_512x608.jpg?v=1688813796",
        price: 1699,
      },
      {
        name:"Hot Wheels Premium Scooby Doo The Mystery Machine - Green - 2021 Card",
        image:"https://toys-india.com/cdn/shop/files/TheMysteryMachineGreenColourCC_640x768.jpg?v=1688216573",
        price: 1999,
      },
      {
        name:"Hot Wheels Premium Barbie Kool Kombi - Green / White - 2022 Card",
        image:"https://toys-india.com/cdn/shop/files/KoolKombiGreenColour_976eb106-02ad-4417-ad0d-e11d59d9c553_800x1000.jpg?v=1684576988",
        price: 2199,  
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
           
            <Link to="/hotwheels" className='sideBarStyle'>
              plastic toys      
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
            <h1 style={titleStyle}>HOT WHEELS</h1>
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
export default HotWheels;