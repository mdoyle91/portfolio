import Navbar from "./components/Navbar/Navbar.jsx";
import Projects from "./components/Projects/Projects.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      {/* May want to use links={navLinks} and the NavbarLink.jsx page per React Components, Nested Components section*/}
    </>
  );
};
export default App;

// const navLinks = [  Will go into the return statement
//   { href: "/", text: "Home" },
//   { href: "/about", text: "About" },
//   { href: "/projects", text: "Projects" },
//   { href: "/testimonials", text: "Testimonials" },
//   { href: "/contact", text: "Contact" },
// ];
