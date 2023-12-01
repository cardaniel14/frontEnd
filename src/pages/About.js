import "../styles/components/pages/About.css";
import React from "react";

const About = (props) => {
  return (
    <main className="holder">
      <div className="bioDani">
        <img src="./images/dani.jpg" alt="Dani" />
        <div className="textAbout">
          <p>
            Hello, World, I'm Daniel! I'm passionate about creating exceptional
            user experiences and developing innovative web applications.
          </p>
          <p>
            I'm ready to apply my skills as a Front-End Developer, trusting my
            ability to transform design concepts into responsive and interactive
            web interfaces that captivate users.
          </p>
          <p>
            I am also well-versed in responsive design principles and best
            practices, ensuring that websites I develop are accessible across
            all devices and screen sizes.
          </p>
        </div>
      </div>
      <div className="spacer"></div>
    </main>
  );
};

export default About;
