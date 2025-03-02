import "./Navbar.css";
import NavbarLink from "../NavbarLink/NavbarLink.jsx";

const Navbar = ({ links }) => {
  return (
    <nav id="top-navbar">
      {links.map((link, index) => (
        <NavbarLink key={index} href={link.href} text={link.text} /> //Having my NavBar coded as such, rather than hard coded, will allow me to add icons/individually style each item of the Navbar.
      ))}
    </nav>
  );
};

export default Navbar;
