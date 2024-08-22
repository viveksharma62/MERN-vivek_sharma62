import { React, useState } from "react";
import "./MobileNav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuUnfold } from "react-icons/ai";

import {
  FcHome,
  FcAbout,
  // FcPortraitMode,
  FcBiotech,
  FcReading,
  FcBusinessContact,
} from "react-icons/fc";
import { BsProjector } from "react-icons/bs";
import { Link } from "react-scroll";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  //handle open
  const handleOpen = () => {
    setOpen(!open);
  };

  //handle menu clicks
  const handleMenuClick = () =>{
    setOpen(false);
  }

  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <AiOutlineMenuUnfold size={30} className="mobile-nav-icon" onClick={handleOpen}/>
          ) : (
            <GiHamburgerMenu size={30} className="mobile-nav-icon" onClick={handleOpen}/>
          )}

          <span className="mobile-nav-tittle">Vivek sharma</span>
        </div>
        {open && (

        
        <div className="mobile-nav-menu">
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleMenuClick}
                >
                  <FcHome />
                  Home
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleMenuClick}

                >
                  <FcAbout />
                  About
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleMenuClick}

                >
                  <FcReading />
                  Eduction
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="teckstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleMenuClick}

                >
                  <FcBiotech />
                  Tech Stack
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleMenuClick}

                >
                  <BsProjector />
                  Project
                </Link>
              </div>
              {/* <div className="nav-link">
                <Link
                  to="workExp"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleMenuClick}

                >
                  <FcPortraitMode />
                  Work Experice
                </Link>
              </div> */}
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleMenuClick}
                >
                  <FcBusinessContact />
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
    
    </>
  );
};

export default MobileNav;
