import { React, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/home/home";
import Skills from "./components/skills/skills";
import Footer from "./components/footer/Footer";
import Contacts from "./components/contacts/contacts";

function App() {
  const [wasClicked, setWasClicked] = useState("");

  return (
    <div className="container">
      <Header wasClicked={wasClicked} setWasClicked={setWasClicked} />
      <main>
        <Home />
        <Skills />
        <Contacts />
      </main>
      <Footer wasClicked={wasClicked} setWasClicked={setWasClicked} />
    </div>
  );
}

export default App;
