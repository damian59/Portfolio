import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
  
    
  
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/home' className='navbar-logo'>
              Damian 
            </Link>

            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/about' className='nav-links' onClick={handleClick}>
                About Me
                </Link>
              </li>
              
              <li className='nav-item'>
              
              <Link to='/proyects' className='nav-links'>

                Works
             
              </Link>
               
              </li>
              <li>
              <Link to='/contact' className='nav-links'>

                Contact
              </Link>
              </li>
              
            </ul>
          </div>
        </nav>
      </>
    );
  };
  
  export default Navbar;
  