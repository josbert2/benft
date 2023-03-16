import React from 'react';
import Partners from '../Pages/Partners';
import Team from '../Pages/Team';

function Home() {
  const styles = {
    "--animation-speed": "4s",
  };
  return (
    <main class="">
        <div class="bg-ellipse2">
                <img class="lazy lazyLoaded" data-load-priority="5" alt="" src="https://idle.finance/assets/img/Ellipse2.6ad222.png" />
            </div>
    
        <div className="h-screen overflow-hidden  App">
          <div class="home_main__IL9KK">
              <div aria-hidden="true" class="home_spotlight__nsbuM"></div>
              <svg aria-hidden="true" class="geist-visually-hidden">
                <filter id="noiseFilter"><feTurbulence baseFrequency="6.29" numOctaves="6" stitchTiles="stitch" type="fractalNoise"></feTurbulence></filter></svg>
          </div>
          <div class="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
              <h1 class="sc-74479697-0 sc-4f2b0b9c-9 fGLicR irLeoN lea leading-8" style={{ lineHeight: "69px;" }}>"Protect your cryptocurrencies <br />  with <span class="text-gradient">BENFT</span></h1>
              <div class="navigation-switcher_root__dpR8z">
                
                  <div class="navigation-switcher_switcher__RbcWU flex justify-center pt-8">
                    <button class="border-button btn-linear-benft relative">
                        <div class="border-button-contents">
                        Enjoy BENFT
                        </div>
                      {/*  <div aria-hidden="true" className="navigation-switcher_glow__P9ODY" data-projection-id={7} style={{transform: 'none', transformOrigin: '50% 50% 0px', opacity: 1}} />
                        <div aria-hidden="true" className="navigation-switcher_pill__x4onZ" data-projection-id={8} style={{transform: 'none', transformOrigin: '50% 50% 0px', opacity: 1}} /> */}
                    </button>
                  </div>
              </div>
              
          </div>
          <div class="flex justify-center absolute bottom-20 left-2/4 -translate-x-2/4 ">
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
                <button class="glowing-box-button flex items-center">
                  <span class="mr-2">
                    Discover
                  </span>
                  <div class="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#606060]">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>
              </div>        
            </div>
        </div>
        <div class="sc-b86529e4-16 eTmfaz h-screen">
            <div class="container mx-auto">
              <div class="my-20">
                <div class="section-header-badge">BeNFT</div>
                <h2 class="section-header-title text-center"><div class="section-header-title-desktop pb-20"><span>POWERED BY A TEAM</span></div></h2>
              </div>
              <div class="cards-grid magical-borders-content px-40">
                <div class="card">
                    <div class="card-inner magical-borders-inner">
                      <img class="lazy-image card-gridline lazy-image-loaded"  src="https://wope.com/images/cards/card-gridline.png" />
                      <div class="card-animation">
                        <div class="card-animation-spotter">
                          <div class="card-animation-popup">
                            <div>
                              <div class="card-animation-popup-title">
                                  E-LEARNING PLATFORM
                              </div>
                            
                            </div>
                          </div>
                          <img class="lazy-image card-animation-spotter-lights lazy-image-loaded" src="https://wope.com/images/cards/card-spotter-lights.png" />
                        </div>
                      </div>
                      <div class="card-text">
                        <div class="card-title">  E-LEARNING PLATFORM</div>
                        <div class="card-description">  Plataforma de e-learning: educación en línea.</div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
        <Partners />
        <Team />
        <div class="">
            <div className="sc-b86529e4-14 sc-295691ec-0 hKXWgx ccDqTO">
                <div className="sc-590812e5-0 geonHp">
                <h2 className="sc-74479697-0 sc-295691ec-2 jfPhrT kPOmuH">
                    Unlike any tool<br />
                    you’ve used before
                </h2>
                <p className="sc-74479697-0 sc-b86529e4-4 sc-295691ec-3 dnoTOq jdXJac byhRHm">Designed to the last pixel and engineered with unforgiving precision, Linear combines UI elegance with world-class performance.</p>
                </div>
                
            </div>
      </div> 
     
      
    </main>
  );
}

export default Home;