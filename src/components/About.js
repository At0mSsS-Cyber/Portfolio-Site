import React, { useEffect, useState } from 'react';
import './css/custom.css';
import image from '../image/dp.jpg';

const About = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`about ${loaded ? 'loaded' : ''}`} style={styles.container}>
      {/* Left Half with Circle */}
      <div className="right-part" style={styles.rightPart}>
        <div className="dp-div" style={styles.dpDiv}>
          <img src={image} alt="Profile" style={styles.dpImage} />
        </div>
      </div>

      {/* Right Half with Text */}
      <div className="left-part" style={styles.leftPart}>
        <h1 style={styles.heading}>Hello</h1>
        <h2 style={styles.subHeading}>A Bit About Me</h2>
        <p style={styles.paragraph}>
          Talented software development professional with experience in clinical and healthcare applications. Consistent in delivering clean, error-free, reliable code to meet current or expected needs. Well-versed in software trends and confident in multiple languages, frameworks, and programming tools.
        </p>
        <div style={styles.linksContainer}>
          <a href="/Portfolio-Site/resume" style={styles.link}>
            <div className={`circle ${loaded ? 'loaded' : ''}`} style={{ ...styles.circle, backgroundColor: '#eea302' }}>
              <span>Resume</span>
            </div>
          </a>
          <a href="/Portfolio-Site/project" style={styles.link}>
            <div className={`circle ${loaded ? 'loaded' : ''}`} style={{ ...styles.circle, backgroundColor: '#ff3b25' }}>
              <span>Projects</span>
            </div>
          </a>
          <a href="/Portfolio-Site/contact" style={styles.link}>
            <div className={`circle ${loaded ? 'loaded' : ''}`} style={{ ...styles.circle, backgroundColor: '#80d8da' }}>
              <span>Contact</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '80vh',
  },
  rightPart: {
    flex: 1,
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
  },
  dpDiv: {
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '0.1rem solid grey',
  },
  dpImage: {
    width: '100%',
    height: '100%',
    objectFit: 'fill',
  },
  leftPart: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    paddingLeft: '20px',
  },
  heading: {
    fontSize: '5rem',
    fontWeight: 'bold',
    letterSpacing: '-0.02em',
    font: 'sans-serif',
  },
  subHeading: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1rem',
    textAlign: 'left',
    maxWidth: '80%',
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  link: {
    textDecoration: 'none',
  },
  circle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    marginRight: '1rem',
    border: '1px solid black',
    fontSize: '1.5rem',
    color: 'black',
    fontWeight: 'bold',
  },
};

export default About;
