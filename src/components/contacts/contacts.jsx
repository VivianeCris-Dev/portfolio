import "./contacts.css";
import whatsapp from "../../assets/Whatsapp.svg";
import linkedin from "../../assets/linkedin-black.svg";
import email from "../../assets/email.svg";

function Contacts() {
  const copiarTexto = async (texto) => {
    try {
      await navigator.clipboard.writeText(texto);
      alert(`Texto copiado: ${texto}`);
    } catch (err) {
      alert("Erro ao copiar para a área de transferência.");
      console.error(err);
    }
  };

  return (
    <div className="contacts" id="contacts">
      <h1>Entre em contato</h1>
      <h4 className="h4">
        Tem um projeto em mente ou quer conversar sobre oportunidades de
        trabalho? Entre em contato comigo e responderei o mais rápido possível.
      </h4>
      <div className="container_contacts">
        <div
          onClick={() => copiarTexto("vivianedev2108@gmail.com")}
          className="box"
        >
          <img className="svg" src={email} alt="Logo email" />
          <span className="rede">E-mail</span>
          <span className="color">vivianedev2108@gmail.com</span>
          <span className="copy">Clique para copiar</span>
        </div>

        <div className="box" onClick={() => copiarTexto("(31)999908788")}>
          <img className="svg" src={whatsapp} alt="Logo whatsapp" />
          <span className="rede">Contato</span>
          <span className="color">(31)999908788</span>
          <span className="copy">Clique para copiar</span>
        </div>

        <a
          href="https:/linkedin.com/in/viviane-cristina-developer"
          target="_blank"
          className="box"
        >
          <img className="svg" src={linkedin} alt="Logo linkedin" />
          <span className="rede">Linkedin</span>
          <span className="color">Viviane Cristina</span>
          <span className="copy">Clique para redirecionar</span>
        </a>
      </div>
    </div>
  );
}

export default Contacts;
