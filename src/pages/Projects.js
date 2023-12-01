import React from "react";
import "../../src/styles/components/pages/Projects.css";

const Projects = (props) => {
  return (
    <main className="projects">
      <div className="projectDescription">
        <h2>SEAGULL METHOD CAFÉ WEB MENU</h2>
        <div className="projectSeagull">
          <img src="./images/MacBook Air.png" alt="MacBook"></img>
          <div className="textDescription">
            <p>
              The project aims to provide customers with a fast, accesible and
              user-friendly menu, displaying photos, ingredients and prices for
              each dish, taking care of every screenwidth the project was made
              with a responsive design.
            </p>
            <h2>Made With</h2>
            <p>HTML, CSS, JavaScript, Bootstrap</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
