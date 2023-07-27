import React from 'react';
import logo from './logo1.jpg';
import {Link} from 'react-router-dom';
import personLogo from './person.png';
import './products.css';

const Lego = () => {
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
      };
    const Products1 = [
      {
        name: "LEGO 43221 Disney 100 Years of Disney Animation Icons",
        image: "https://toycra.com/cdn/shop/files/LEGO-43221-Disney-100-Years-of-Disney-Animation-Icons-Construction-LEGO-Toycra-2_805x805.jpg?v=1687427894",
        price: 6999,
      },
      {
        name: "LEGO 43216 Disney Princess Princess Enchanted Journey",
        image: "https://toycra.com/cdn/shop/products/Lego-43216-Disney-Princess-Princess-Enchanted-Journey-Construction-Lego-Toycra_805x805.webp?v=1681468559",
        price: 7999,
      },
      {
        name:"LEGO 76400 Harry Potter Hogwarts Carriage and Thestrals",
        image:"https://toycra.com/cdn/shop/products/Lego-76400-Harry-Potter-Hogwarts-Carriage-and-Thestrals-Construction-Lego-Toycra_805x805.jpg?v=1681467184",
        price: 2499,
      },
      {
        name: "LEGO 75318 Star Wars The Child ( 1073 Pieces )",
        image: "https://toycra.com/cdn/shop/products/Lego-75318-Star-Wars-The-Child-1073-Pieces-Construction-Lego-Toycra_805x805.jpg?v=1681467036",
        price: 9999,
      },
      

    ];

    const Products2 = [
      {
        name:"LEGO 21240 Minecraft The Swamp Adventure",
        image:"https://toycra.com/cdn/shop/products/Lego-21240-Minecraft-The-Swamp-Adventure-Construction-Lego-Toycra_805x805.webp?v=1681468327",
        price: 1999,
      },
      {
        name:"LEGO 76959 Jurassic World Triceratops Research",
        image:"https://toycra.com/cdn/shop/files/LEGO-76959-Jurassic-World-Triceratops-Research-Construction-LEGO-Toycra_805x805.webp?v=1687427943",
        price: 6499,
      },
      {
        name: "LEGO 76242 Marvel Super Heroes Thanos Mech Armor",
        image: "https://toycra.com/cdn/shop/products/Lego-76242-Marvel-Super-Heroes-Thanos-Mech-Armor-Construction-Lego-Toycra_805x805.jpg?v=1681467502",
        price: 1899,
      },
      {
        name:"Lego 21326 Ideas Winnie the Pooh -1265 Pieces",
        image:"https://toycra.com/cdn/shop/files/Lego-21326-Ideas-Winnie-the-Pooh-1265-Pieces-Construction-LEGO-Toycra_805x805.webp?v=1684576401",
        price: 10999,
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
              Hot Wheels         
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
            <h1 style={titleStyle}>LEGO</h1>
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
export default Lego;