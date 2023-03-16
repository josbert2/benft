import React from 'react';
import logo from '../Logo-Sitio-01.png';


function Header() {
  const styles = {
    "--animation-speed": "4s",
  };
  return (
    <header class="text-white header absolute top-0 w-full">
      <div class="container flex mx-auto justify-between items-center">
        <div class="header-logo">
          <img src={logo} class="h-full w-full" />
        </div>
        <div class="flex justify-center items-center gap-5">
          <button class="header-button text-[#9b96b0] mb-0 mr-5">What is $BENFT</button>
          <button class="header-button text-[#9b96b0] mb-0 mr-5">Roadmap</button>
          <button class="header-button text-[#9b96b0] mb-0 mr-5">Team</button>
          <button class="header-button text-[#9b96b0] mb-0 mr-5">Partners</button>
          <button class="header-button text-[#9b96b0] mb-0 mr-5">FAQ</button>

        </div>
        <div class="header-actions  flex items-center">
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
      </div>
    </header>
  );
}

export default Header;