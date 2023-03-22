import { useState } from "react";
import "./css/bootstrap.css";
import "./css/custom.css";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" >
      <a href="/" className="navbar-brand name">
        <span className="pro-circle"></span>
        AKHIL TOM
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleNavbarToggle}
      >
        <i
          className={`fas ${isNavbarOpen ? 'fa-times' : 'fa-bars'}`}
          style={{
            transition: 'transform 0.2s ease',
            transform: isNavbarOpen ? 'rotate(90deg)' : 'none'
          }}
        ></i>
      </button>
      <div
        className={`collapse navbar-collapse justify-content-end ${isNavbarOpen ? 'show' : ''} `}
      >
        <ul className="navbar-nav border-0">
          <li className="nav-item">
            <a href="/resume" className="nav-link">
              Resume
            </a>
          </li>
          <li className="nav-item ">
            <a href="/project" className={`nav-link ${isNavbarOpen ? '' : 'nav-right'} `}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className={`nav-link ${isNavbarOpen ? '' : 'nav-right'} `}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
