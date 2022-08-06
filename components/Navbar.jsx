import React, {useState} from "react";
import Link from 'next/link';



const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenu = () => {

    setMenuOpen(!menuOpen)
    console.log(menuOpen)
  }
  return (
    <div className="navbar">
      <div className="navbar_nav">
          <Link href='/'>
            <div className="navbar_nav-logo">
                <img src="logo.png" alt="Thawakal Transport Logo" />

            
            </div>
          </Link>

        <div className="navbar_nav_mobile" onClick={handleMenu}>
        <div htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </div>
        </div>

        <div className={menuOpen ? 'navbar_nav-menu menu_show' : 'navbar_nav-menu'}>
          <div className="link">
            <Link href='/'>
              <a>Home</a>
            </Link>
          </div>
          <div className="link">
            <a href="#">About</a>
          </div>
          <div className="link">
            <a href="#">Our Services</a>
          </div>
          <div className="link">
            <Link href="/about">
              <a >Contact</a>
            </Link>
          </div>
         
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
