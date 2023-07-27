import React from 'react';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './products.css';

const Wood = () => {
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
        name: "3D Shape Builder",
        image: "https://allthingsbaby.com/cdn/shop/products/Brainsmith_1_280x.png?v=1624871451",
        price: 1599,
      },
      {
        name: "Mini Bowling Pins Set",
        image: "https://allthingsbaby.com/cdn/shop/products/MiniBowlingPins_280x.jpg?v=1678356624",
        price: 799,
      },
      {
        name: "Active Triangle",
        image: "https://allthingsbaby.com/cdn/shop/products/activity_triangle_square_280x.jpg?v=1678356052",
        price: 2399,
      },
      {
        name: "Wooden Rattle Circular Natural",
        image: "https://allthingsbaby.com/cdn/shop/products/ARR004-1_280x.jpg?v=1658128503",
        price: 399,
      },

    ];

    const Products2 = [
      {
        name:"Simple Stacker Colored",
        image:"https://allthingsbaby.com/cdn/shop/products/ARST001-R-1_280x.jpg?v=1658302901",
        price: 899,
      },
      {
        name:"Lace & Make Safari Animals",
        image:"https://allthingsbaby.com/cdn/shop/products/1_6fed21ad-db8a-451a-9087-402b4bbe1bca_280x.jpg?v=1678427838",
        price: 799,
      },
      {
        name:"Wooden Rolling Rattle",
        image:"https://allthingsbaby.com/cdn/shop/products/ARR017-1_280x.jpg?v=1658134615",
        price: 599,
      },
      {
        name:"Wooden Rainbow Pikler Triangle",
        image:"https://allthingsbaby.com/cdn/shop/products/Image_2_cd4e9698-eff4-464b-95bd-b713899667eb_280x.jpg?v=1678445490",
        price: 9499,
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
              Plastic toys      
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
            <h1 style={titleStyle}>WOODEN TOYS</h1>
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
          <br/>
          <div className='product-container'>
            {Products2.map((item, index) => (
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
export default Wood;