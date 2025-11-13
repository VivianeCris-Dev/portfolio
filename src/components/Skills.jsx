import { Code2, Palette, Rocket } from "lucide-react";

function Skills() {
  const features = [
    {
      icon: Code2,
      title: "Código Limpo",
      description: "Desenvolvimento com foco em código limpo e manutenível.",
    },
    {
      icon: Palette,
      title: "Design Moderno",
      description: "Interfaces elegantes e responsivas.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Aplicações otimizadas e performáticas.",
    },
  ];
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", aesthetics: 70 },
        { name: "HTML/CSS", aesthetics: 80 },
        { name: "JavaScript", aesthetics: 70 },
        { name: "TypeScript", aesthetics: 50 },
        { name: "Vite", aesthetics: 70 },
        { name: "VS Code", aesthetics: 70 },
        { name: "Figma", aesthetics: 80 },
      ],
    },
    {
      category: "Outras",
      skills: [
        { name: "REST APIs", aesthetics: 20 },
        { name: "Tailwind CSS", aesthetics: 90 },
        { name: "Git/GitHub", aesthetics: 30 },
        { name: "Responsive Design", aesthetics: 90 },
        { name: "Performance", aesthetics: 70 },
        { name: "Accessibility", aesthetics: 50 },
      ],
    },
  ];
  return (
    <section
      id="skills"
      className="py-20 bg-[#272832] w-screen h-screen flex items-center justify-center max-[1044px]:h-[1280px] max-[768px]:h-[2000px] max-[513px]:h-[2050px] max-[462px]:h-[2100px] max-[392px]:h-[2200px]"
    >
      <div className="container px-4 flex">
        <div className="max-w-6xl mx-auto flex gap-20 max-[1044px]:flex-col">
          <div>
            <h2 className="text-4xl font-bold mb-12 text-center text-white">
              Sobre{" "}
              <span className="bg-gradient-hero bg-clip-text text-[#1471f3d6]">
                Mim
              </span>
            </h2>
            <h3 className="text-xl font-bold mb-7 text-center text-gray-300 ">
              <a href="#home" className="text-xl font-bold text-[#1471f3d6]">
                {"<Dev />"}
              </a>{" "}
              Viviane{" "}
              <span className="bg-gradient-hero bg-clip-text text-[#1471f3d6]">
                Cristina
              </span>
            </h3>
            <p className="text-lg text-gray-200 mb-12 text-center max-w-5xl mx-auto">
              Desenvolvedora front-end apaixonada por criar experiências web
              incríveis. Com tecnologias modernas, transformo ideias em
              realidade digital com foco em qualidade, performance e e design.
              <br className="max-[1044px]:hidden" /> Estou sempre preparada para
              os desafios me dedicando aos estudos para sempre estar encontrando
              a melhor versão de mim mesma.{" "}
              <br className="max-[1044px]:hidden" /> Desde criança sou
              apaixonada por tecnologia, filmes, séries e jogos. Por isso foi
              muito fácil escolher qual carreira seguir.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className=" bg-[#1f1f26] border border-gray-700 rounded-lg p-4 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                >
                  <feature.icon className="w-10 h-10 text-[#1471f3d6] mb-4" />
                  <h3 className="text- font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="container px-4">
            <h2 className="text-4xl font-bold mb-4 text-center text-white">
              Minhas{" "}
              <span className="bg-gradient-hero bg-clip-text text-[#1471f3d6]">
                Habilidades
              </span>
            </h2>
            <p className="text-gray-100 text-center mb-12 max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar aplicações web
              modernas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-8xl mx-auto">
              {skillCategories.map((category, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-2xl font-semibold mb-6 text-[#1471f3d6]">
                    {category.category}
                  </h3>
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-white">
                          {skill.name}
                        </span>
                      </div>
                      <div className="h-2 bg-[#606161] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#1471f3d6] transition-all duration-1000 ease-out"
                          style={{ width: `${skill.aesthetics}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
