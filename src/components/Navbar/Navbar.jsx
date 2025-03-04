import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <h3>Mike Doyle</h3>
      </div>

      <div className="nav-center">
        <h3>Full-Stack Developer</h3>
        <Link
          to="https://github.com/mdoyle91"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </Link>
        <Link
          to="https://www.linkedin.com/in/michaeldoyle91/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
        <span className="menu-text">Menu</span>{" "}
        {/* Need to look into the CSS here--not sure why the menu link doesn't appear when size of portfolio is smaller. */}
      </div>
    </nav>
  );
};

export default Navbar;
