import heroBg from "../../public/hero-bg.jpg";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

function Home() {
  return (
    <section
      id="home"
      className="relative w-screen h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6 flex justify-center gap-4">
            <a
              href="https://github.com/VivianeCris-Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#1471f3d6] transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/viviane-cristina-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#1471f3d6] transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:vivianedev2108@gmail.com"
              className="text-gray-300 hover:text-[#1471f3d6] transition-colors duration-300"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-[#1471f3d6] max-[490px]:text-5xl max-[395px]:text-4xl">
            Desenvolvedora <br /> Front-End
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Criando experiências digitais modernas e performáticas com React,
            JavaScript e as melhores práticas de desenvolvimento web.
          </p>

          <div className="flex gap-4 justify-center items-center max-[395px]:flex-col">
            <button
              className="flex items-center justify-center bg-[#1471f3d6] text-gray-300 rounded-lg w-[160px] h-[40px] cursor-pointer hover:bg-[#3785f3d4] "
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver Projetos
              <ArrowRight className="ml-2" />
            </button>
            <button
              className=" flex items-center justify-center bg-[#323333d5] text-gray-300 rounded-lg w-[160px] h-[40px] border border-gray-500 cursor-pointer hover:bg-[#505050d1]"
              onClick={() =>
                document
                  .getElementById("contacts")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#1471f3d6] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#1471f3d6] rounded-full" />
        </div>
      </div>
    </section>
  );
}

export default Home;
