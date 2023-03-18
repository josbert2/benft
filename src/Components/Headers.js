import React, { useState, useRef, useEffect } from 'react';
import logo from '../Logo-Sitio-01.png';


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  function handleMenuButtonClick() {
    setIsMenuOpen(!isMenuOpen);
    setIsOverlayOpen(isOverlayOpen);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  function handleToggleClick() {
    setIsOpen(!isOpen);
  }

  function handleMenuButtonClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  const styles = {
    "--animation-speed": "4s",
  };
  return (
    <>
     
      <header class="text-white header md:px-0 px-10 py-5 absolute top-0 w-full">
        <div class="container flex mx-auto justify-between items-center">
          <div class="header-logo">
            <img src={logo} class="h-full w-full" />
          </div>
          <div class="md:flex hidden justify-center items-center gap-5">
            <button class="header-button text-[#9b96b0] mb-0 mr-5">What is $BENFT</button>
            <button class="header-button text-[#9b96b0] mb-0 mr-5">Roadmap</button>
            <button class="header-button text-[#9b96b0] mb-0 mr-5">Team</button>
            <button class="header-button text-[#9b96b0] mb-0 mr-5">Partners</button>
            <button class="header-button text-[#9b96b0] mb-0 mr-5">FAQ</button>

          </div>
          <div class="header-actions  md:flex hidden items-center">
            <button class="header-button text-[#9b96b0] mb-0 mr-5">Iniciar Sesión</button>
            <div class="glowing-box glowing-box-active" style={styles}>
              <div class="glowing-box-animations">
                <div class="glowing-box-glow"></div>
                <div class="glowing-box-stars-masker">
                  <div class="glowing-box-stars"></div>
                </div>
              </div>
              <div class="glowing-box-borders-masker">
                <div class="glowing-box-borders">
                
                </div>
              </div>
              <button class="glowing-box-button">
                <span>
                  Sign up
                </span>
              </button>
            </div>
          </div>
          <div class="md:hidden flex "  onClick={handleToggleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </div>
        </div>
      </header>
      <div className={`menu-mobile-overlay  ${isOverlayOpen ? 'open' : ''}`}></div>
      <nav className="menu-mobile" ref={menuRef}>
    
        <ul className={`menu-mobile__list ${isOpen ? 'open' : ''}`}>
          <li className="menu-mobile__item chakra-text css-xiqael">
            <a href="#">What is $BENFT</a>
          </li>
          <li className="menu-mobile__item chakra-text css-xiqael">
            <a href="#">Roadmap</a>
          </li>
          <li className="menu-mobile__item chakra-text css-xiqael">
            <a href="#">Team</a>
          </li>
          <li className="menu-mobile__item chakra-text css-xiqael">
            <a href="#">artners</a>
          </li>
          <li className="menu-mobile__item chakra-text css-xiqael">
            <a href="#">FAQ</a>
          </li>
        </ul>
      </nav>
    </>
    
  );
}

export default Header;