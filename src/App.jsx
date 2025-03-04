import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Projects from "./components/Projects/Projects.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
export default App;
