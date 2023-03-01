import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Door from "./components/Door";

function App() {
  const [doorOpen, setDoorOpen] = useState(false); // initialize state

  const handleDoorClick = () => {
    setDoorOpen(true); // update state when the door is clicked
  };

  return (
    <div>
      {!doorOpen && <Door onClick={handleDoorClick} />}{" "}
      {doorOpen && (
        <>
          <NavBar />
          <Presentation />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
