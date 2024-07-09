import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className='footer-flex' style={styles.footerFlex}>
        <div style={styles.section}>
          <p style={styles.sectionTitle}>Phone</p>
          <p>+91-9745332709</p>
        </div>
        <div style={styles.section}>
          <p style={styles.sectionTitle}>Email</p>
          <p>akhiltom0274@gmail.com</p>
        </div>
        <div style={styles.section}>
          <p style={styles.sectionTitle}>Connect With Me</p>
          <div style={styles.iconsContainer}>
            <a href="https://twitter.com/" style={styles.iconLink} target="_blank" rel="noopener noreferrer">
              <FaTwitter style={styles.icon} size={30}/>
            </a>
            <a href="https://www.linkedin.com/in/akhil-tom" style={styles.iconLink} target="_blank" rel="noopener noreferrer">
              <FaLinkedin style={styles.icon} size={30}/>
            </a>
          </div>
        </div>
        <div style={styles.section}>
          <p style={styles.sectionTitle}>Repo</p>
          <a href="https://github.com/At0mSsS-Cyber" style={styles.iconLink} target="_blank" rel="noopener noreferrer">
            <FaGithub style={styles.icon} size={30}/>
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#eee',
    padding: '1rem 2rem',
    marginBottom: '0px',
  },
  footerFlex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
  },
  section: {
    marginBottom: '1rem',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  iconsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLink: {
    marginRight: '1rem',
    textDecoration: 'none',
  },
  icon: {
    color: 'black',
  },
};

export default Footer;
