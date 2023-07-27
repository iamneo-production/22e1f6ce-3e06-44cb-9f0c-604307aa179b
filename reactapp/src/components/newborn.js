import React from 'react';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './products.css';

const NewBorn = () => {
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
        marginLeft: '650px',
      };
    const Products1 = [
      {
        name: "Babyhug Panda Face Rattle Cum Soft Toy Ring - Black & White",
        image: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/2809440a.webp",
        price: 199,
      },
      {
        name: "NEGOCIO Swimming Turtle Wind Up Water Floating Bath Toy Pack of 4 - Multicolour",
        image: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/13058931a.webp",
        price: 499,
      },
      {
        name: "Bonfino Wooden Castanet Rattle Toy - Multicolour",
        image: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11761910a.webp",
        price: 349,
      },
      {
        name: "StarAndDaisy Soft Teeth Rattle Ball Toys - Multicolor",
        image: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11873482a.webp",
        price: 429,
      },

    ];

    const Products2 = [
      {
        name:"Mee Mee Rattle Set Set of 3 - Multi Color",
        image:"https://cdn.fcglcdn.com/brainbees/images/products/438x531/1685896a.webp",
        price: 399,
      },
      {
        name:"StarAndDaisy Soft Teeth Rattle Ball Toy - Multicolor",
        image:"https://cdn.fcglcdn.com/brainbees/images/products/438x531/11873481a.webp",
        price: 429,
      },
      {
        name:"Babyhug Flip Flower Rattle - Red",
        image:"https://cdn.fcglcdn.com/brainbees/images/products/438x531/3019390a.webp",
        price: 109,
      },
      {
        name:"Bonfino Bear Soft Rattle - Yellow",
        image:"https://cdn.fcglcdn.com/brainbees/images/products/438x531/11860233a.webp",
        price: 309,
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
            <h1 style={titleStyle}>NEW BORN TOYS</h1>
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
export default NewBorn;