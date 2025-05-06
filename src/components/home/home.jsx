import "./home.css";
import curriculo from "../../assets/VIVIANECRISTINA.pdf";

function Home() {
  return (
    <div className="home" id="home">
      <span className="deve">Desenvolvedora Font-end</span>
      <h1 className="title">Criando experiências digitais impactantes</h1>
      <p className="text">
        Desenvolvedora front-end crio interfaces modernas, responsivas e de alta
        performance, transformando ideias em experiências digitais memoráveis.
      </p>
      <div className="link_abaut">
        <a className="a" href={curriculo} download={curriculo}>
          Baixe meu currículo
        </a>
        <a className="ab" href="#contacts">
          Entre em contato
        </a>
      </div>
    </div>
  );
}

export default Home;
