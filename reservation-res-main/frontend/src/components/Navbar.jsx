import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link as ScrollLink } from "react-scroll"; 
import { Link } from "react-router-dom"; 
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className="logo">New wave</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((element) => (
            <ScrollLink
              key={element.id}
              to={element.link}
              smooth={true}
              duration={500}
              spy={true}
            >
              {element.title}
            </ScrollLink>
          ))}
        </div>

        {/* ✅ PAGE NAVIGATION */}
        <Link to="/menu" className="menuBtn">
          OUR MENU
        </Link>
        <Link to="/Bookings" className="bookingsBtn">
          OUR BOOKINGS
        </Link>
      </div>

      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;