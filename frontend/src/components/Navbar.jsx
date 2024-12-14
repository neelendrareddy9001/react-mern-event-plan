import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="w-full p-3 bg-gray-400 text-white">
      <div className="logo">KING's</div>
      <div>
        <Link to="hero" spy={true} smooth={true} duration={500}>
          HOME
        </Link>
        <Link to="services" spy={true} smooth={true} duration={500}>
          SERVICES
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500}>
          ABOUT
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
