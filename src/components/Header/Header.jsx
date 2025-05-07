import "./header.css";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin-black.svg";
import instagram from "../../assets/insta.svg";

function Header({ wasClicked, setWasClicked }) {
  return (
    <div className="header">
      <div className="svg_div">
        <a
          href="https://github.com/VivianeCris-Dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="svg_header" alt="logo do github" src={github} />
        </a>
        <a
          href="https://www.linkedin.com/in/viviane-cristina-developer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="svg_header" alt="logo do linkedin" src={linkedin} />
        </a>
        <a
          href="https://www.instagram.com/viviane_crisalves?igsh=MWY2MHdpcGNkdXJ5eQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="svg_header" alt="logo do instagram" src={instagram} />
        </a>
      </div>
      <ul className="skills">
        <li className="summary_header">
          <a
            href="#home"
            onClick={() => setWasClicked("#home")}
            className={wasClicked === "#home" ? "blue" : "summary_header"}
          >
            Home
          </a>
        </li>
        <li className="summary_header">
          <a
            href="#skill"
            onClick={() => setWasClicked("#skill")}
            className={wasClicked === "#skill" ? "blue" : "summary_header"}
          >
            Sobre Mim
          </a>
        </li>
        <li className="summary_header">
          <a
            href="#contacts"
            onClick={() => setWasClicked("#contacts")}
            className={wasClicked === "#contacts" ? "blue" : "summary_header"}
          >
            Contato
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
