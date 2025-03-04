import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-first-section">
        <h1>Hello, I'm Mike,</h1>
        <h1>a full-stack developer</h1>
        <h1>based in Brooklyn.</h1>
      </div>
      <div className="home-second-section">
        <h2>
          <Link to="/about">About</Link>
        </h2>
        <p>
          I am a full-stack developer dedicated to crafting seamless,
          user-friendly experiences. My background in medical market research
          and teaching English as a foreign language has sharpened my ability to
          understand client needs and effectively communicate solutions. With a
          tenacious, collaborative spirit, I strive to write elegant, intuitive,
          and stylish code that enhances user engagement and accessibility.
        </p>
      </div>
      <div className="home-third-section">
        <h2>
          <Link to="/projects">Projects</Link>
        </h2>
        <div className="home-project-one">
          <h3>
            <Link to="/projects/linguafranca">LinguaFranca</Link>
          </h3>
          <p>Django.py/PostgreSQL</p>
        </div>
        <div className="home-project-two">
          <h3>
            <Link to="projects/towlocator">NYC Tow Locator</Link>
          </h3>
          <p>Node.js/Express/MongoDB/Javascript</p>
        </div>
      </div>
    </>
  );
};

export default Home;
