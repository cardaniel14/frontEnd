import "../../styles/components/layout/Nav.css";

import { Link } from "react-router-dom";
export default function Nav(props) {
  return (
    <nav className="nav">
      <div>
        <ul className="navMenu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/novedades">Novedades</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
