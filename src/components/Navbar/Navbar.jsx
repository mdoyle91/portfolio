import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";
import NavbarLink from "../NavbarLink/NavbarLink.jsx";
//WilL probably want to use react-router-dom for this as it's a SPA. Checkout React-Router's Navlink function--more info on React Router DOM-Creating Links

const Navbar = ({ links }) => {
  return (
    <>
      <nav>
        <h3>Mike Doyle</h3>
        <h3>Full-Stack Developer</h3>
        <Link to="https://github.com/mdoyle91">
          <FaGithub />
          GitHub
        </Link>
        <Link to="https://www.linkedin.com/in/michaeldoyle91/">
          <FaLinkedin />
          LinkedIn
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </>
  );
};

export default Navbar;

// <NavbarLink key={index} href={link.href} text={link.text} /> Having my NavBar coded as such, rather than hard coded, will allow me to add icons/individually style each item of the Navbar.
