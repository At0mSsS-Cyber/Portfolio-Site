import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#eee', padding: '1rem 2rem', marginBottom:'0px'}}>
  <div className='footer-flex' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'center', justifyContent:'space-between' }}>
    <div style={{ marginBottom: '1rem' }}>
      <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Phone</p>
      <p >+91-9745332709</p>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Email</p>
      <p>akhiltom0274@gmail.com</p>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Connect With Me</p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <a href="https://twitter.com/" style={{ marginRight: '1rem' }} target="_blank">
          <FaTwitter style={{ color: 'black' }} size={30}/>
        </a>
        <a href="https://www.linkedin.com/in/akhil-tom" target="_blank">
          <FaLinkedin style={{ color: 'black' }} size={30}/>
        </a>
      </div>
    </div>
    <div style={{ marginBottom: '1rem' }}>
      <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Repo</p>
      <a href="https://github.com/At0mSsS-Cyber" target="_blank">
          <FaGithub style={{ color: 'black' }} size={30}/>
        </a>
    </div>
  </div>
</footer>

  );
};

export default Footer;