import React from 'react';
import logo from '../Logo-Sitio-01.png';





function Footer() {
    const styles = {
        "--mouse-x": "879px",
        "--mouse-y": "116.906px"
      };
      const length = 10; // Longitud del array simulado
      const simulatedArray = Array.from({ length }, (_, index) => index); // Simulación del array
    
  return (
    <>
        <footer class="bg-black footer">
            <div class="relative overflow-hidden jMTAZH" >
               
                <div class="md:py-20 md:px-40 px-10 py-10">
                    <div class="md:grid md:grid-cols-4 gap-20">
                        <div class="">
                            <div class="w-[220px]">
                                <img class="w-full h-full" src={logo} />
                                
                            </div>
                            <div class="footer-nav-group-item  mt-4">
                                Overall, BeNFT is the perfect solution for anyone looking to take their digital investments.
                            </div>
                        </div>
                        <div class="flex md:flex-row flex-col justify-evenly w-full col-span-3">
                            <div class="md:mb-0 mb-10">
                                <h2 class="text-[#d0d6e0] text-[14] font-medium tracking-wider mb-4">About</h2>
                                <div className="footer-nav-group" >
                                
                                    <ul>
                                        <li >
                                        <a href="#" aria-label="Features" className="footer-nav-group-item">
                                            Documentation
                                        </a>
                                        </li>
                                        <li >
                                        <a href="#" aria-label="Live Demo" className="footer-nav-group-item">
                                        CoinMarketCap
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="#"
                                            aria-label="Pricing & Plans"
                                            className="footer-nav-group-item"
                                        >
                                            CoinGecko
                                        </a>
                                        </li>
                                        <li >
                                        <a href="#" aria-label="Contact" className="footer-nav-group-item">
                                        Disclaimer
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="md:mb-0 mb-10">
                                <h2 class="text-[#d0d6e0] text-[14] font-medium tracking-wider mb-4">Support</h2>
                                <div className="footer-nav-group" >
                                
                                    <ul>
                                        <li >
                                        <a href="#" aria-label="Features" className="footer-nav-group-item">
                                        Getting Started on BeNFT
                                        </a>
                                        </li>
                                        <li >
                                        <a href="#" aria-label="Live Demo" className="footer-nav-group-item">
                                            FAQ
                                        </a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div class="md:mb-0 mb-10">
                                <h2 class="text-[#d0d6e0] text-[14] font-medium tracking-wider mb-4">Protocol</h2>
                                <div className="footer-nav-group" >
                                
                                    <ul>
                                        <li >
                                        <a href="#" aria-label="Features" className="footer-nav-group-item">
                                        Apply for DropZone
                                        </a>
                                        </li>
                                        <li >
                                        <a href="#" aria-label="Live Demo" className="footer-nav-group-item">
                                        Apply for Fusion Pool
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="#"
                                            aria-label="Pricing & Plans"
                                            className="footer-nav-group-item"
                                        >
                                           Apply for Fusion Pool
                                        </a>
                                        </li>
                                        <li >
                                        <a href="#" aria-label="Contact" className="footer-nav-group-item">
                                        Apply for Fusion Pool
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="md:mb-0 mb-10">
                                <h2 class="text-[#d0d6e0] text-[14] font-medium tracking-wider mb-4">Comunity</h2>
                                <div className="footer-nav-group" >
                                
                                    <ul class="md:block md:flex-col flex-row flex justify-between">
                                        <li class="">
                                            <a href="#" aria-label="Features" className="footer-nav-group-item">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook w-6 h-6" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li >
                                        <a href="#" aria-label="Live Demo" className="footer-nav-group-item ">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube w-6 h-6" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <rect x="3" y="5" width="18" height="14" rx="4" />
                                            <path d="M10 9l5 3l-5 3z" />
                                            </svg>
                                        </a>
                                        </li>
                                        <li>
                                        <a
                                            href="#"
                                            aria-label="Pricing & Plans"
                                            className="footer-nav-group-item"
                                        >
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram w-6 h-6" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <rect x="4" y="4" width="16" height="16" rx="4" />
                                                <circle cx="12" cy="12" r="3" />
                                                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                                                </svg>
                                         
                                        </a>
                                        </li>
                                        <li >
                                        <a href="#" aria-label="Contact" className="footer-nav-group-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-telegram w-6 h-6" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                                            </svg>
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" py-8 text-center relative overflow-hidden">
                    <div aria-hidden="true" class="navigation-switcher_stroke__Qh9TK transparent-distract"></div>
                    <p class="footer-nav-group-item ">Copyright &copy; {new Date().getFullYear()} 2022, BeNFT Solutions $BeNFT.</p>
                </div>
                
            </div>
                
            </footer>
    </>
  );
}

export default Footer;