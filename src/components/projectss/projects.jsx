import "./projects.css";
import imgVendas from "../../../public/imgVendas.png";

function Projects() {
  return (
    <div id="projects" className="projects">
      <h1>Meus Projetos</h1>
      <h4 className="h4">
        Uma seleção dos meus trabalhos recentes em desenvolvimento front-end,
        demonstrando minhas habilidades em criar interfaces interativas e
        responsivas
      </h4>

      <div className="proje">
        <img
          src={imgVendas}
          alt="Captura da tela de um computador"
          className="img-vendas"
        />
        <div className="container_tools">
          <h4>Site De Vendas Moderno</h4>
          <p>Aplicação comércio eletrônico com React e Tailwind CSS.</p>
          <div className="tools">
            <span className="deve">HTML</span>
            <span className="deve">React.js</span>
            <span className="deve">Tailwind CSS</span>
          </div>
          <div className="link_abaut">
            <a
              href="https://catalogodevendas.netlify.app/"
              target="_blank"
              className="a"
            >
              Visualize
            </a>
            <a
              href="https://github.com/VivianeCris-Dev/site-de-vendas"
              target="_blank"
              className="ab"
            >
              Código
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
