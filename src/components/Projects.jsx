import { ExternalLink, Github } from "lucide-react";
function Projects() {
  const projects = [
    {
      title: "E-commerce Moderno",
      description:
        "Aplicação de comércio que utiliza o localStorage para armazenamento.",
      technologies: ["JavaScript", "localStorage", "Tailwind CSS", "React"],
      link: "https://catalogodevendas.netlify.app/",
      github: "https://github.com/VivianeCris-Dev/site-de-vendas",
    },
    {
      title: "Jogo Da Memória",
      description:
        "Aplicação com Javascript Vanilla e CSS, onde é possível selecionar a dificuldade de jogo.",
      technologies: ["JS Vanilla", "setTimeout()", "CSS"],
      link: "https://vivianejogodamemoria.netlify.app/",
      github: "https://github.com/VivianeCris-Dev/JogoDaMemoria.js",
    },
    {
      title: "Lista De Tarefas",
      description:
        "Aplicação para listar tarefas, adicionar detalhes, marcar como concluída e remove-la.",
      technologies: ["React", "TypeScript", "router-dom", "localStorage"],
      link: "https://listadetarefasts.netlify.app/",
      github: "https://github.com/VivianeCris-Dev/lista-de-tarefas",
    },
    {
      title: "Portfólio Profissional",
      description: "Aplicação focada no design e na apresentação do cliente.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Figma"],
      link: "https://advocaciavivianedev.netlify.app/",
      github: "https://github.com/VivianeCris-Dev/Advocacia",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-[#1f1f26] w-screen h-screen flex items-center justify-center max-[768px]:h-[1250px] max-[390px]:h-[1400px] "
    >
      <div className="container px-4">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          Meus <span className="text-[#1471f3d6]">Projetos</span>
        </h2>
        <p className="text-gray-200 text-center mb-12 max-w-3xl mx-auto">
          Confira alguns dos projetos que desenvolvi, demonstrando minhas
          habilidades em front-end.
        </p>

        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto max-[768px]:grid-cols-1 max-[768px]:max-w-sm">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#272832] border border-gray-600 rounded-lg hover:shadow-card transition-all duration-300 hover:-translate-y-1 group w-[410px] h-[220px] flex flex-col items-center justify-center max-[1025px]:w-[350px] max-[768px]:w-[410px] max-[456px]:w-[380px] max-[408px]:w-[360px] max-[390px]:h-[250px] max-[390px]:w-[340px] max-[370px]:w-[325px] max-[360px]:w-[310px] max-[335px]:w-[290px]"
            >
              <div className="w-80 flex flex-col items-center justify-center max-[370px]:w-64">
                <div className="mb-4 w-[328px] max-[1025px]:w-[308px] max-[768px]:w-[328px] max-[390px]:w-[300px] max-[370px]:w-[280px] max-[335px]:w-[270px]">
                  <h1 className="text-2xl font-bold text-[#1471f3d6] group-hover:text-white transition-colors duration-300 max-[1025px]:text-xl max-[768px]:text-2xl">
                    {project.title}
                  </h1>
                  <span className="text-gray-100 text-[15px] max-[1025px]:text-[13px] max-[768px]:text-[15px]">
                    {project.description}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4 w-[328px] max-[1025px]:w-[308px] max-[768px]:w-[328px] max-[390px]:w-[300px] max-[370px]:w-[280px] max-[335px]:w-[270px]">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#505050d1] text-gray-300 px-2 py-1 rounded max-[1025px]:text-2xs max-[768px]:text-xs max-[390px]:text-2xs max-[370px]:text-3xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-center bg-[#272832] text-gray-100 rounded-lg w-[160px] h-[35px] border border-gray-500 cursor-pointer hover:bg-[#505050d1] transition-colors max-[1025px]:text-[15px] max-[1025px]:w-[140px] max-[768px]:w-[160px] max-[768px]:text-[18px] max-[390px]:w-[130px]"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" inline-flex items-center justify-center bg-[#272832] text-gray-100 rounded-lg w-[160px] h-[35px] border border-gray-500 cursor-pointer hover:bg-[#505050d1] max-[1025px]:text-[15px] max-[1025px]:w-[140px] max-[768px]:w-[160px] max-[768px]:text-[18px] max-[390px]:w-[130px]"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
