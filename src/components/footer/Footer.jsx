import "./footer.css";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin-black.svg";
import instagram from "../../assets/insta.svg";

function Footer({ wasClicked, setWasClicked }) {
  return (
    <div className="footer">
      <div className=" footer_text">
        <div className="port">
          <strong className="por">
            Portfólio<span className="az">*</span>
          </strong>
          <span>Criando experiências digitais memoráveis.</span>
        </div>
        <div className="svg_div_footer">
          <a href="https:/github.com/VivianeCris-Dev" target="_blank">
            <img className="svg_footer" alt="logo do github" src={github} />
          </a>
          <a
            href="https:/linkedin.com/in/viviane-cristina-developer"
            target="_blank"
          >
            <img className="svg_footer" alt="logo do linkedin" src={linkedin} />
          </a>
          <a
            href="https:/instagram.com/viviane_crisalves?igsh=MWY2MHdpcGNkdXJ5eQ=="
            target="_blank"
          >
            <img
              className="svg_footer"
              alt="logo do instagram"
              src={instagram}
            />
          </a>
        </div>

        <div className="ski">
          <strong className="por">Links Rápidos</strong>
          <ul className="skills-ul">
            <li className="summary">
              <a
                href="#home"
                onClick={() => setWasClicked("#home")}
                className={wasClicked === "#home" ? "blue" : "summary"}
              >
                Home
              </a>
            </li>
            <li className="summary">
              <a
                href="#skill"
                onClick={() => setWasClicked("#skill")}
                className={wasClicked === "#skill" ? "blue" : "summary"}
              >
                Sobre Mim
              </a>
            </li>
            <li className="summary">
              <a
                href="#contacts"
                onClick={() => setWasClicked("#contacts")}
                className={wasClicked === "#contacts" ? "blue" : "summary"}
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="line_footer"></div>
      <div>
        <strong className="summary">@VivianeCristinaDeveloper</strong>
      </div>
    </div>
  );
}

export default Footer;
