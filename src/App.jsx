import Navbar from "./components/Navbar/Navbar.jsx";
import Projects from "./components/Projects/Projects.jsx";
// import { useState } from "react";  From review of changing state--not sure that will be needed for the creation of this portfolio
import "./App.css";

const projects = [
  {
    name: "Project 4",
    type: "Django",
    id: 1,
  },
  {
    name: "Project 2",
    type: "Express",
    id: 2,
  },
];

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/projects", text: "Projects" },
  { href: "/testimonials", text: "Testimonials" },
  { href: "/contact", text: "Contact" },
];

const App = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false); From review of changing state--not sure that will be needed for the creation of this portfolio

  return (
    <>
      {/* <div className={isDarkMode ? "dark" : "light"}> From review of changing state--not sure that will be needed for the creation of this portfolio*/}
      <Navbar links={navLinks} />
      <main>
        <h1>Hello, world!</h1>
      </main>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <Projects key={project.id} {...project} /> //Not sure if I want to use the spread operator  here or project={project}
        ))}
      </ul>
      {/* </div> */}
    </>
  );
};
export default App;
