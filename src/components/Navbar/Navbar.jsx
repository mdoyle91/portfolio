import "./Navbar.css";
import NavbarLink from "../NavbarLink/NavbarLink.jsx";
//WilL probably want to use react-router-dom for this as it's a SPA. Checkout React-Router's Navlink function--more info on React Router DOM-Creating Links

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
