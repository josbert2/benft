import React from 'react';
import logo from '../Logo-Sitio-01.png';





function Footer() {
  return (
    <>
        
        <footer class="bg-black text-white">
            <div class="relative overflow-hidden jMTAZH" >
                <div aria-hidden="true" class="navigation-switcher_stroke__Qh9TK blue-distract"></div>
                <div class="py-40 px-40 ">
                    <div class="grid grid-cols-4 gap-20">
                        <div class="">
                            <div class="w-34">
                                <img class="w-full h-full" src={logo} />
                                
                            </div>
                            <div class="text-[#d0d6e0] text-xs tracking-wider mt-4">
                                Overall, BeNFT is the perfect solution for anyone looking to take their digital investments.
                            </div>
                        </div>
                        <div class="">
                            <h2 class="text-[#d0d6e0] text-[14] font-medium tracking-wider mb-4">Whitepaper</h2>
                        </div>
                    </div>
                </div>
                <div class=" py-8 text-center relative overflow-hidden">
                    <div aria-hidden="true" class="navigation-switcher_stroke__Qh9TK transparent-distract"></div>
                    <p class="text-base text-[#d0d6e0] text-[14] font-light tracking-wider">&copy; {new Date().getFullYear()} BeNFT</p>
                </div>
                
            </div>
                
            </footer>
    </>
  );
}

export default Footer;