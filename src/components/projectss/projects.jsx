import "./projects.css";
import imgVendas from "../../../public/imgVendas.png";
import imgMemory from "../../../public/imgMemory.png";
import imgTasks from "../../../public/imgTasks.png";

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
        <div className="container_tools">
          <div className="description">
            <h4>Jogo Da Memória</h4>
            <strong className="atl_green">Em andamento</strong>
            <p>
              Uma aplicação feita para trabalhar logica de código com Javascript
              javascript Vanilla e CSS. Nesse jogo você poderá escolher a
              dificuldade do tempo e a quantidade de cartas. Pronto para ser
              desafiado(a)?
            </p>
          </div>
          <div className="tools">
            <span className="deve">JS Vanilla</span>
            <span className="deve">setTimeout()</span>
            <span className="deve">CSS</span>
          </div>
          <div className="link_abaut">
            <a
              href="https://vivianejogodamemoria.netlify.app/"
              target="_blank"
              className="a"
            >
              Visualizar
            </a>
            <a
              href="https://github.com/VivianeCris-Dev/JogoDaMemoria.js"
              target="_blank"
              className="ab"
            >
              Código Fonte
            </a>
          </div>
        </div>
        <img
          src={imgMemory}
          alt="Captura da tela de um computador"
          className="img-vendas img-memory"
        />
      </div>

      <div className="proje">
        <img
          src={imgVendas}
          alt="Captura da tela de um computador"
          className="img-vendas"
        />
        <div className="container_tools">
          <div className="description">
            <h4>Site De Vendas Moderno</h4>
            <strong className="atl_green">Em andamento</strong>
            <p>
              Aplicação de comércio eletrônico com React e Tailwind CSS. A
              aplicação utiliza o localStorage para salvar todas as alterações.
            </p>
          </div>
          <div className="tools">
            <span className="deve">localStorage</span>
            <span className="deve">React.js</span>
            <span className="deve">Tailwind CSS</span>
          </div>
          <div className="link_abaut">
            <a
              href="https://catalogodevendas.netlify.app/"
              target="_blank"
              className="a"
            >
              Visualizar
            </a>
            <a
              href="https://github.com/VivianeCris-Dev/site-de-vendas"
              target="_blank"
              className="ab"
            >
              Código Fonte
            </a>
          </div>
        </div>
      </div>

      <div className="proje">
        <div className="container_tools">
          <div className="description">
            <h4>Lista De Tarefas</h4>
            <strong className="atl_green">Em andamento</strong>
            <p>
              Aplicação com um sistema de listar tarefas, adicionar detalhes,
              marcar como concluida e remove-la.
            </p>
          </div>
          <div className="tools">
            <span className="deve">React</span>
            <span className="deve">Typescript</span>
            <span className="deve">react-router-dom</span>
          </div>
          <div className="link_abaut">
            <a
              href="https://listadetarefasts.netlify.app/"
              target="_blank"
              className="a"
            >
              Visualizar
            </a>
            <a
              href="https://github.com/VivianeCris-Dev/lista-de-tarefas"
              target="_blank"
              className="ab"
            >
              Código Fonte
            </a>
          </div>
        </div>
        <img
          src={imgTasks}
          alt="Captura da tela de um computador"
          className="img-vendas img-memory"
        />
      </div>
    </div>
  );
}

export default Projects;
