import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else handleShow(false);
    });
    return () => {
        window.removeEventListener("scroll");
    };
  }, []);
    
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img 
          classNamwe="nav__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png"
          alt="Netflix Logo"
        />

        <img 
          classNamwe="nav__avatar"
          src="https://pbs.twig.com/profile_images/124011999041155"
          alt="Netflix Logo"
        />
    </div>
  );
}

export default Nav;
