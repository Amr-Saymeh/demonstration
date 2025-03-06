import React, { useState, useEffect } from 'react';
import '../pages/styles/LeftSection.css';
import "../pages/styles/navbar-style.css"
import AURA from '../images/AURA.png';
import { Link } from 'react-router-dom';

const LeftSection = () => {


  const savedTheme = localStorage.getItem('darkMode') === 'true';


  const [isChecked, setIsChecked] = useState(savedTheme);

  useEffect(() => {
    if (!isChecked) {
      document.querySelector("body").classList.add("dark-mode");
    } else {
      document.querySelector("body").classList.remove("dark-mode");
    }
    localStorage.setItem('darkMode', isChecked.toString());
  }, [isChecked]);

  const toggleTheme = () => {
    setIsChecked(prevChecked => !prevChecked);
  };
  const [isSignedIn, setIsSignedIn] = useState(() => {
    const storedStatus = localStorage.getItem('isSignedIn');
    return storedStatus ? JSON.parse(storedStatus) : false;  // Default to false if not set
  });
  useEffect(() => {
    localStorage.setItem('isSignedIn', JSON.stringify(isSignedIn));
  }, [isSignedIn]);
  const sign_out = () => {
    localStorage.setItem("isSignedIn", false);
  }
  return (
    <div className="split left"> {/* Container for the left section */}


      <Link to="/home"> <img className="logos" src={AURA} alt="logo" /> </Link> {/* Display the logo */}

      <div className="NavContainers"> {/* Wrapper for navigation items */}
        <nav>
          <ul id="nav_lists"> {/* Navigation list */}
            {/* Gallery Link */}
            <li id="gal-icons">
              <Link to="/home">
                <i className="fa-regular fa-images"></i> {/* Icon for Gallery */}
                <span className="menus">Gallery</span>
              </Link>
            </li>
            {/* Store Link */}
            <li id="store-icons">
              <Link to="/shop">
                <i className="fa-solid fa-store"></i> {/* Icon for Store */}
                <span className="menus">Store</span>
              </Link>
            </li>
            {/* Messages Link */}
            <li id="mas-icons">
              <Link to="/community">
                <i className="fa-regular fa-comments"></i> {/* Icon for Messages */}
                <span className="menus">Messages</span>
              </Link>
            </li>
            {/* Create Link */}
            <li id="add-icons">
              <Link to="/upload">
                <i className="fa fa-plus-square" style={{ fontSize: '24px' }}></i> {/* Icon for Create */}
                <span className="adds">Create</span>
              </Link>
            </li>
            {/* Dark Mode Toggle */}
            <li id="dark-icons" onClick={() => toggleTheme()}>

              <label htmlFor="themeToggle" className="themeToggle st-sunMoonThemeToggleBtn" type="checkbox">
                <input type="checkbox" id="themeToggle" className="themeToggleInput" checked={isChecked} onChange={toggleTheme} />
                <svg width={18} height={18} viewBox="0 0 20 20" fill="currentColor" stroke="none">

                  <mask id="moon-mask">
                    <rect x={0} y={0} width={20} height={20} fill="white" />
                    <circle cx={11} cy={3} r={8} fill="black" />
                  </mask>
                  <circle className="sunMoon2" cx={10} cy={10} r={8} mask="url(#moon-mask)" />
                  <g>
                    <circle className="sunRay sunRay12" cx={18} cy={10} r="1.5" />
                    <circle className="sunRay sunRay22" cx={14} cy="16.928" r="1.5" />
                    <circle className="sunRay sunRay32" cx={6} cy="16.928" r="1.5" />
                    <circle className="sunRay sunRay42" cx={2} cy={10} r="1.5" />
                    <circle className="sunRay sunRay52" cx={6} cy="3.1718" r="1.5" />
                    <circle className="sunRay sunRay62" cx={14} cy="3.1718" r="1.5" />
                  </g>
                </svg>
              </label>
              <div className="theme-switch2">
                <span className="menus"> Mode</span>

              </div>
            </li>



          </ul>
        </nav>
      </div>


      {/* Logout Button */}
      <div className="logout-container">
        <button className="Btn">
          <div className="sign" onClick={() => sign_out()}>
            <Link to="/home">
              <svg viewBox="0 0 512 512"> {/* SVG for Logout icon */}
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
              </svg>
            </Link>
          </div>
          <div className="text"> Logout</div> {/* Text for Logout button */}
        </button>
      </div>
    </div>

  );
};

export default LeftSection;
