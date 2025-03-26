import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-first-section">
        <h1>About</h1>
        <p>
          I am a full-stack developer dedicated to crafting seamless,
          user-friendly experiences. My background in medical market research
          and teaching English as a foreign language has sharpened my ability to
          understand client needs and effectively communicate solutions. With a
          tenacious, collaborative spirit, I strive to write elegant, intuitive,
          and stylish code that enhances user engagement and accessibility.
        </p>
      </div>
      <div className="about-second-section">
        <h2>Languages/Frameworks</h2>
      </div>
      <div className="about-third-section">
        <h2>Utilities</h2>
      </div>
    </>
  );
};

export default About;
