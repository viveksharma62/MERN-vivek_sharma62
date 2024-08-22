import React from "react";
import "./Menu.css";
import { Zoom } from "react-reveal";
import { Fade } from "react-reveal";

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
import MyImage from '../../assets/images/myImages.png'

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
        <Zoom>

          <div className="navbar-profile-pic">
            <img
              src={MyImage}
              alt="profile pic"
            />
          </div>
          </Zoom>

          <Fade left>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
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
                duration={100}                >
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
                duration={100}                >
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
                duration={100}                >
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
                duration={100}>
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
                duration={100}>
                <FcBusinessContact />
                Contact
                </Link>
              </div>
            </div>
          </div>
          </Fade>

        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
              <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}                >
                  <FcHome />
                </Link>
              </div>

              <div className="nav-link">
              <Link 
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}                >
                <FcAbout />
                </Link>
              </div>

              <div className="nav-link">
                <Link 
                to="education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}                >
                <FcReading />
                </Link>
              </div>

              <div className="nav-link">
              <Link 
                to="teckstack"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}                >
                <FcBiotech />
                </Link>
              </div>

              <div className="nav-link">
              <Link 
                to="project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}                >
                <BsProjector />
                </Link>
              </div>

              {/* <div className="nav-link">
              <Link
                to="workExp"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}>
                <FcPortraitMode />
                </Link>
              </div> */}

              <div className="nav-link">
              <Link 
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}>
                <FcBusinessContact />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
