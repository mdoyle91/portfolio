import Navbar from "./components/Navbar/Navbar.jsx";
import Projects from "./components/Projects/Projects.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>Hello, world!</h1>;
      </main>
      <h2>Projects</h2>
      <ul>
        <Projects name="Project 4" type="Django" />
        <Projects name="Project 2" type="Express" />
      </ul>
    </>
  );
};
export default App;
