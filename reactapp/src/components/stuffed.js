import React from 'react';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './products.css';

const Stuffed = () => {
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
        name: "Babyhug Baby Cat Plush Toy - Height 20 cm",
        image: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/9021878a.webp",
        price: 399,
      },
      {
        name: "Babyhug Baby Penguin Soft Toy - Height 19 cm",
        image: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/2321418a.webp",
        price: 399,
      },
      {
        name: "FunBlast Unicorn Soft Toy Pink - Length 35 cm",
        image: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11722792a.webp",
        price: 649,
      },
      {
        name: "DPARANI Elephant Stuffed Plush Soft Toy - Height 40 cm",
        image: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12291307a.webp",
        price: 799,
      },

    ];

    const Products2 = [
      {
        name:"Babyhug Baby Penguin Soft Toy Blue - Height 23 cm",
        image:"https://cdn.fcglcdn.com/brainbees/images/products/438x531/9180389a.webp",
        price: 429,
      },
      {
        name:"Babyhug Dinosaur Soft Toy Blue - Height 28 cm",
        image:"https://cdn.fcglcdn.com/brainbees/images/products/438x531/9021866a.webp",
        price: 499,
      },
      {
        name:"DPARANI Pig With Crown Stuffed Plush Soft Toy - Height 50 cm",
        image:"https://cdn.fcglcdn.com/brainbees/images/products/438x531/13243092a.webp",
        price: 1099,
      },
      {
        name:"DPARANI Cat Hello Kitty with bow Soft Stuffed Plush Toy - Height 35 cm",
        image:"https://cdn.fcglcdn.com/brainbees/images/products/438x531/12291312a.webp",
        price: 759,
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
            <h1 style={titleStyle}>STUFFED ANIMALS</h1>
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
export default Stuffed;