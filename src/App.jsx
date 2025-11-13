import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  const [wasClicked, setWasClicked] = useState("");

  useEffect(() => {
    if (wasClicked) {
      const section = document.querySelector(wasClicked);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [wasClicked]);

  const menuItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#skills" },
    { label: "Projetos", href: "#projects" },
    { label: "Contatos", href: "#contacts" },
  ];

  return (
    <div className="container">
      <Header
        wasClicked={wasClicked}
        setWasClicked={setWasClicked}
        menuItems={menuItems}
      />
      <Home />
      <Skills />
      <Projects />
      <Contacts />
      <Footer
        wasClicked={wasClicked}
        setWasClicked={setWasClicked}
        menuItems={menuItems}
      />
    </div>
  );
}

export default App;
