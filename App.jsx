import React from 'react';
import './App.css';
import bgImage from './assets/Hero_section.png';
import Logo from './assets/smart lights_logo.svg';
import streetlight from './assets/street_light_controler.png';
import Vector1 from './assets/Vector1.svg';
import Vector2 from './assets/Vector2.svg';
import Vector3 from './assets/Vector3.svg';
import Rectangle13 from './assets/Rectangle 131.svg';

import Rectangle14 from './assets/Rectangle 141.svg';
import Rectangle15 from './assets/Rectangle 151.svg';
import Cloud from './assets/cloud_based_management.png';
import Line13 from './assets/Line 13.svg';
import Line14 from './assets/Line 14.svg';
import Line15 from './assets/Line 15.svg';
import Vector7 from './assets/Vector 7.svg';
import UserGlobe from './assets/globe.svg';
import Evaluation from './assets/Evaluation.svg';
import Gateway from './assets/gateway.svg';
import ARRRight from './assets/ARR-Left.svg';
import ARRLeft from './assets/ARR-Right.svg';
import FrImage from './assets/unsplash.png';
import ProductImage from './assets/image_placeholder.png';
import NEArrow from './assets/icon_png.png';
import f3_Image from './assets/f3-Group-image.png';   
import FooterImage from './assets/Footer.png';
import CloudSystem from './assets/Cloud-system.svg';
import Component1 from './assets/Component 1.png';
import Component2 from './assets/Component 1 (1).png';
import Component3 from './assets/Component 1 (2).png';
import Component4 from './assets/Component 1 (3).png';
import Component5 from './assets/Component 2.png';

 
const Navbar = () => (
 <section className="navbar">  
  <div className="navbar-container">
    <div className="frame-x">
     
      <img src={Logo} alt="Logo" className="Logo" />
      
    </div>
    <div className="frame-y">
      <div className="links">
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#services">Software Services</a>
      </div>
      <div className="button">
        <button>
          <div>
            Login
          </div>
        </button>
      </div>
    </div>
  </div>
</section>
);

const HeroSection = () => (
  <section className="hero-section" 
    style={{ 
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '1920px',
      height: '1033px',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      font:'Inter',

    }}
  >
    <Navbar />

    <div className="title">
      <div className="title-frame">
        <h1 className="title-text">Smart Lighting Solutions</h1>
          <p className="mask-group">
            Bringing A New Perspective To Street Lights <br />
            And Cities Of Tomorrow.
          </p>
      </div>
        <div className="button2">
        <button>
          <div>
            Login
          </div>
        </button>
      </div>
    </div>
  </section>
);


const Frame = ({ id, title, content, bgColor, color, backgroundImage }) => (
<section 
id={id}
className="frame" 
style={{ 
  color: color || 'black',
  backgroundImage: id === 'frame2' ? `url(${FrImage})` : 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: id === 'frame1' ? '1918px' : id === 'frame2' ? '1920px' : id === 'frame3' ? '1236px':'100vh',
  height: id === 'frame1' ? '1193px' : id === 'frame2' ? '1333px' : id === 'frame3' ? '1812px' : '100vh',
  margin: id === 'frame1' ? '0 auto' : id === 'frame2' ? '120px auto 0' : id === 'frame3' ? '0 auto' : '0',
  position: 'relative',
  border: id === 'frame1' ? 'none' : id === 'frame2' ? 'none' : id === 'frame3' ? 'none' : '1px solid #CDCDCD',
  background: id === 'frame1' 
    ? 'linear-gradient(126.13deg, #FFFFFF 14.38%, rgba(226, 242, 255, 0.86) 74.7%, #ECF7FF 100.68%)' 
    : id === 'frame2'
    ? "none"
    : id === 'frame3'
    ? 'linear-gradient(166.74deg, #FFFFFF 9.53%, #FAFFFF 99.94%)'
    : undefined,
  display: id === 'frame2' || id === 'frame3' ? 'flex' : undefined,
  justifyContent: id === 'frame2' || id === 'frame3' ? 'center' : undefined,
  alignItems: id === 'frame2' || id === 'frame3' ? 'center' : undefined,
  }}
>
  

    {id === 'frame1' && (
      <div className="Group-parent">
        <div className="frame-f1">
          <div className="frame-f2">
            <div className="frame-f3">
              <div className="frame-f4">
                <p className="frame-f4-text">
                  Ecosystem
                </p>
              </div>
            </div>{/* closing of frame-f3 */}

            <p 
              className = "frame-f2-text-block">
                How does a smart street light ecosystem work?
            </p>
          </div> 
        </div>

        <div className="Group-g2">
          <div className="g2-frame1">
            <div className="g2a">
              <div className="g2a-frame-1">

                <div className="rectangle15">
                  <img src={Rectangle15} alt="Rectangle15" className="rectangle15-img" />
                  <div className="rectangle14">
                    <img src={Rectangle14} alt="Rectangle14" className="rectangle14-img" />
                    <div className="g2a-frame-1a">
                      <div className="g2a-frame-1aGroup">
                        <img src={streetlight} alt="streetlight" className="streetlight" />
                      </div>
                    </div>        
                  </div>
                </div>
                
              </div>

              <div className="g2a-frame-2">

              <div className="rectangle15">
                  <img src={Rectangle15} alt="Rectangle15" className="rectangle15-img" />
                  <div className="rectangle14">
                    <img src={Rectangle14} alt="Rectangle14" className="rectangle14-img" />
                    <div className="g2a-frame-1a">
                      <div className="g2a-frame-1aGroup">
                        <img src={streetlight} alt="streetlight" className="streetlight" />
                      </div>
                    </div>        
                  </div>
                </div>
              </div>
            </div> 
            

            <div className="g2b">

              <p className="g2b-text1">Street Light Controller</p>
              <p className="g2b-text2">Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp</p>
            </div>

          </div> {/* g2-frame1 close */}
          

            <div className="g2-frame2">
              <div className="g2c">
              <img src={CloudSystem} alt="CloudSystem" className="CloudSystem" />

              </div>

              <div className="g2d">
              <p className="g2d-text1">Cloud-based Management System</p>
              <p className="g2d-text2">Collects information from multiple gateways.</p>
              </div>
            </div> {/* g2-frame2 close */}

              <div className="Line13">
                <img src={Line13} alt="Line13" className="Line13" />
              </div> 
              <div className="Line14">
                <img src={Line14} alt="Line14" className="Line14" />
              </div> 
            

            <div className="g2-Group">
              <div className="Line15">
                <img src={Line15} alt="Line15" className="Line15" />
              </div> 
              <div className="Vector7">
                <img src={Vector7} alt="Vector7" className="Vector7" />
              </div> 


              <div className="g2-Group-frame">
                <div className="frame-L">
                  <div className="L1">
                    <div className="L1-Group">
                    <img src={UserGlobe} alt="UserGlobe" className="UserGlobe" />
                    </div>
                  </div>
                  <div className='L2'>
                    <div className='L2-text1'>
                      Users
                    </div>
                    <div className='L2-text2'>
                      Data from the cloud is used to monitor and control street lights by the System Managers.
                    </div>
                  </div>
                </div>

                <div className="frame-R">
                  <div className='R1'>
                    <div className="R1-Group">
                      <img src={Evaluation} alt="Evaluation" className="Evaluation" />
                    </div>
                  </div>
                  <div className='R2'>
                    <div className='R2-text1'>
                      Evaluation
                    </div>
                    <div className='R2-text2'>
                      Gathered insights are used to evaluate the performance of the lighting systems.
                    </div>
                  </div>
                </div>
              </div>
            </div>



           

          <div className="g2-frame3">
            <div className='g2-frame3u'>
              <div className="g2-frame3uGroup">
                <img src={Gateway} alt="Gateway" className="Gateway" />
              </div>
            </div>

            <div className='g2-frame3d'>
              <div className='g2-frame3d-text1'>
                Gateway
              </div>
              <div className='g2-frame3d-text2'>
                Employed for interfacing between a Controller and the Lighting Management Software.
              </div>
            </div>
          </div>

        </div> {/* Group-g2 closed */}
        
      </div> // Group-parent closed
      )}

    
    {id === 'frame1' && (
      <div className="Rectangle"/>
    )}
  


    {id === 'frame2' && (
      <div className="frame2-parent">
          <div className="Rectangle12"/>
          <div className='Rectangle11'/>

          <div className="frameARR">
            <div className='ARR-Left'>
              <img src={ARRLeft} alt="ARRLeft" className="ARRLeft" />
            </div>
            <div className='ARR-Right'>
              <img src={ARRRight} alt="ARRRight" className="ARRRight" />
            </div>
          </div>


        <div className='Product'>
          <div className='Component'>

            <div class="component1">
            <img src={Component1} alt="Component1" className="Component1" />
            </div>
            <div class="component2">
            <img src={Component2} alt="Component2" className="Component2" />
            
            </div>
            <div class="component3">
            <img src={Component3} alt="Component3" className="Component3" />
            
            </div>
            <div class="component4">
            <img src={Component4} alt="Component4" className="Component4" />
            
            </div>
            <div class="component5">
            <img src={Component5} alt="Component5" className="Component5" />
            
            </div>
            
          </div>

          <div className='Product-heading'>
            <div className='Product-headingInner'>
              <div className='frame-Product'>
                <div className='frame-ProductInner'>
                  <p className='frame-ProductInner-Text'>
                    Products
                  </p>

                </div>
              <p class="frame-Product-Text">
                <span class="highlight-1">Cutting-edge hardware</span>
                <span class="highlight-2">,</span>
                <span class="highlight-3"> offerings helping cities optimize resources and achieve smart development goals.</span>
              </p>
              </div>
            </div>
          </div>

          <div className="Product-body">
            <img src={ProductImage} alt="ProductImage" className="ProductImage" />
          <div className='frame-Product-body'>

            <div className='frame-P1'>
              <p className="P1-Text1">
                Products
              </p>
              <p className="P1-Text2">
                1/5
              </p>
            </div>

            <div className='frame-P2'>
              <div className="P2-body">
                <p className='P2-body-Text1'>
                  Centralized Control & Monitoring System
                </p>
                <p className='P2-body-Text2'>
                  Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for
                  a group of 30-50 street lights.
                </p>
              </div>
              <div className="P2-bottom">
                <p className='P2-bottom-Text'>
                 KnowMore
                </p>
                <div className='P2-bottom-logo'>
                  <img src={NEArrow} alt="NEArrow" className="NEArrow" />
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
    )} {/* frame2 closed */}

  {id === 'frame3' && (
    <div className='frame3-Parent'>
      <div className='frame3-Group'>
        
        <div className='frame3-body'>

          <p className='f3-head'>
            The platform assists city managers on multiple fronts
          </p>
          <div className='f3-frame1'>
            <div className='f3-group'>
              <img src={f3_Image} alt="f3_Image" className="f3_Image" />
            </div>
            <p className='f3-frame1-text'>
              Ensures smart monitoring and control of the street light infrastructure.
            </p>
          </div>

          <div className='f3-frame2'>
            <div className='f3-group'>
              <img src={f3_Image} alt="f3_Image" className="f3_Image" />
            </div>
            <p className='f3-frame2-text'>
              Detects power thefts.
            </p>
          </div>

          <div className='f3-frame3'>
            <div className='f3-group'>
              <img src={f3_Image} alt="f3_Image" className="f3_Image" />
            </div>
            <p className='f3-frame3-text'>
              Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage failures, etc.
            </p>
          </div>

          <div className='f3-frame4'>
            <div className='f3-group'>
              <img src={f3_Image} alt="f3_Image" className="f3_Image" />
            </div>
            <p className='f3-frame4-text'>
            Lowers downtimes
            </p>
          </div>

          <div className='f3-frame5'>
            <div className='f3-group'>
              <img src={f3_Image} alt="f3_Image" className="f3_Image" />
            </div>
            <p className='f3-frame5-text'>
            Ensures security in the neighborhood
            </p>
          </div>

          <div className='f3-frame6'>
            <div className='f3-group'>
              <img src={f3_Image} alt="f3_Image" className="f3_Image" />
            </div>
            <p className='f3-frame6-text'>
            Saves on power consumption & related costs
            </p>
          </div>

          <div className='line6'></div>
          <div className='line7'></div>
          <div className='line8'></div>
          <div className='line9'></div>
          <div className='line10'></div>
          <div className='line11'></div>
          <div className='line12'></div>
          
        </div>
      </div>
    </div>
  )}

    </section>   // section closed
);






const Footer = () => (
  <footer className="website-footer">
    <div className='Footer-Image'>
      <img src={FooterImage} alt="FooterImage" className="FooterImage" />
    </div>

    <div className='footer-Group'>
    </div>
      <div className='PrivacyTerms'>
        <div>Privacy Policy</div>
        <div>|</div>
        <div>Terms & Conditions</div>
        <div>|</div>
        <div>Cookie Policy</div>
      </div>

      <div className='divider'></div>

      <div className='footer-nav'>
      <div className='Product-detail'>Product</div>
      <div className='Company'>Software Services</div>
      <div className='Followus'>Follow Us</div>
      </div>

      <div className='footer-logo'>
        <img src={Logo} alt="Logo" className="Logo" />
      </div>


   
   
  </footer>
);

const App = () => {
  const frames = [
    { 
      id: 'frame1', 
      title: 'Frame 1', 
      content: 'This is the first frame.', 
      bgColor: 'linear-gradient(126.13deg, #FFFFFF 14.38%, rgba(226, 242, 255, 0.86) 74.7%, #ECF7FF 100.68%)',
      // backgroundImage: `url(${backgroundImage})`
    },
    { 
      id: 'frame2', 
      title: 'Frame 2', 
      content: 'This is the second frame.', 
    },
    { 
      id: 'frame3', 
      title: 'Frame 3', 
      content: 'This is the third frame.',  
    }
  ];

  return (
    <div id="app">
      <HeroSection />
      {frames.map((frame) => (
        <Frame
          key={frame.id}
          id={frame.id}
          title={frame.title}
          content={frame.content}
          bgColor={frame.bgColor}
          color={frame.color}
          backgroundImage={frame.backgroundImage}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;





