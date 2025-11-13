import { Github, Linkedin, Mail } from "lucide-react";

function Footer({ wasClicked, setWasClicked, menuItems }) {
  return (
    <footer className="py-20 bg-[#1f1f26]  w-screen h-[200px] flex flex-col items-center justify-center max-[1055px]:h-[400px] max-[435px]:h-[500px]">
      <div className="mb-9 flex items-center justify-between w-[1000px] max-[1055px]:w-[900px] max-[958px]:w-[800px] max-[828px]:w-[700px] max-[736px]:w-[600px] max-[736px]:flex-col max-[736px]:items-start max-[648px]:w-[500px] max-[540px]:w-[400px] max-[435px]:w-[300px]">
        <div className="flex w-1/2 max-[736px]:mb-10 max-[435px]:w-[200px]">
          <div>
            <a href="#home" className="text-xl font-bold text-[#1471f3d6] ">
              {"<Dev />"}
              <span className="text-white ml-2 ">
                Viviane{" "}
                <span className="text-[#1471f3d6] text-[28px] font-bold ">
                  *
                </span>
              </span>
            </a>
            <div>
              <span className="text-gray-300 mt-3">
                Criando experiências digitais memoráveis.
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between w-1/2 max-[1055px]:flex-col max-[736px]:w-[90px]">
          <div className="flex items-start justify-center text-gray-300 gap-3 max-[1055px]:mb-3 max-[736px]:flex-col max-[736px]:mb-10 max-[736px]:gap-1">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setWasClicked(item.href);
                }}
                className={`font-medium hover:text-[#1471f3d6] transition-colors duration-300 ${
                  wasClicked === item.href
                    ? "text-[#1471f3d6]"
                    : "text-gray-300"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/VivianeCris-Dev"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="github"
              className="text-gray-300 hover:text-[#1471f3d6]"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/viviane-cristina-developer"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Linkedin"
              className="text-gray-300  hover:text-[#1471f3d6]"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:vivianedev2108@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Mail"
              className="text-gray-300  hover:text-[#1471f3d6]"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center text-gray-300">
        <div className=" w-[200px] h-[2px] bg-gradient-to-r from-gray-300 to-transparent mb-3" />
        <span className="max-[430px]:text-xs">
          © 2025 Viviane Cristina. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
