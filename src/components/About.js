import React,{useEffect,useState} from 'react';
import './css/custom.css';
import image from '../image/dp.jpg'

const About = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);


    return (
      <div className= {`about ${loaded ? 'loaded' : ''}`} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', minHeight: '80vh' }}>
        {/* Left Half with Circle */}
        <div className='right-part' style={{ flex: 1, display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
          <div className='dp-div' style={{ width: '400px', height: '400px', borderRadius: '50%', overflow: 'hidden', border: '0.1rem solid grey' }}>
            <img src={image} alt="Profile"  style={{ width: '100%', height: '100%', objectFit:'fill' }} />
          </div>
        </div>
  
        {/* Right Half with Text */}
        <div className='left-part' style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start',paddingLeft:'20px' }}>
          <h1 style={{ fontSize: '5rem', fontWeight: 'bold', letterSpacing:'-0.02em',font:'sans-serif' }}>Hello</h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>A Bit About Me</h2>
          <p style={{ fontSize: '1rem', textAlign: 'left', maxWidth: '80%' }}>Talented software development professional with experience in clinical and healthcare applications. Consistent in delivering clean, error-free, reliable code to meet current or expected needs. Well-versed in software trends and confident in multiple languages, frameworks and programming tools.</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <a href="/Portfolio-Site/resume" style={{ textDecoration:'none'}}>
              <div className={`circle ${loaded ? 'loaded' : ''}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  borderRadius: '50%', backgroundColor: '#eea302', marginRight: '1rem', border: '1px solid black', fontSize: '1.5rem', color: 'black', fontWeight: 'bold' }}>
                <span>Resume</span>
              </div>
            </a>
            <a href="/Portfolio-Site/project" style={{ textDecoration:'none'}}>
              <div className={`circle ${loaded ? 'loaded' : ''}`} style={{  borderRadius: '50%', backgroundColor: '#ff3b25', marginRight: '1rem', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <span style={{ fontSize: '1.5rem', color: 'black', fontWeight: 'bold', }}>Projects</span>
              </div>
            </a>
            <a href="/Portfolio-Site/contact" style={{ textDecoration:'none'}}>
              <div className={`circle ${loaded ? 'loaded' : ''}`} style={{  borderRadius: '50%', backgroundColor: '#80d8da', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <span style={{ fontSize: '1.5rem', color: 'black', fontWeight: 'bold', }}>Contact</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  

export default About;