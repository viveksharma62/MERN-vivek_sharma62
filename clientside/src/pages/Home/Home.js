import React from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Resume.pdf";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { Fade } from "react-reveal";

const Home = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div className="container-fluid	 home-container " id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsMoonStarsFill size={30} />
          ) : (
            <BsSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi 🙋‍♂️ I'M A 👇</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Front End Developer! ",
                    "Mern Stack Developer!",
                    ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>

          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=9304926750"
                // href="https://wa.me/9304926750"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
                </a>
              <a
                className="btn btn-cv "
                href={Resume}
                download="vivek_sharma.pdf"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
