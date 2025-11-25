import { Github, Linkedin, Mail, MapPin, Phone, Instagram } from "lucide-react";
function Contacts() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Vivianedev2108@gmail.com",
      link: "mailto:vivianedev2108@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "VivianeCris-Dev",
      link: "https://github.com/VivianeCris-Dev",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Viviane Cristina",
      link: "https://www.linkedin.com/in/viviane-cristina-developer",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "Viviane_crisalves",
      link: "https://www.instagram.com/viviane_crisalves/?igsh=MWY2MHdpcGNkdXJ5eQ%3D%3D#",
    },
    {
      icon: Phone,
      label: "Telefone/WhatsApp",
      value: "(31)99990-8788",
      link: null,
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Minas Gerais, Brasil",
      link: null,
    },
  ];

  return (
    <section
      id="contacts"
      className="py-20 bg-[#272832] w-screen h-screen flex items-center justify-center max-[630px]:h-[800px]"
    >
      <div className="container px-4 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          Entre em <span className="text-[#1471f3d6]">Contato</span>
        </h2>
        <p className="text-gray-200 text-center mb-12 max-w-2xl mx-auto">
          Tem um projeto em mente? Vamos trabalhar juntos para transformá-lo em
          realidade.
        </p>

        <div className="flex flex-col items-center justify-center gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-[#1f1f26] border border-gray-500 rounded-xl p-8 max-[360px]:p-6">
              <div className="mb-9">
                <h1 className="text-gray-300 font-bold text-[24px] mb-1 max-[360px]:text-[20px]">
                  Informações de Contato
                </h1>
                <span className="text-white max-[360px]:text-[13px]">
                  Fique à vontade para entrar em contato através de qualquer
                  canal abaixo.
                </span>
              </div>
              <div className="space-y-2">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#505050d1] flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-[#1471f3d6]" />
                    </div>
                    <div>
                      <p className="text-base text-gray-300">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="font-medium text-white hover:text-[#1471f3d6] transition-colors max-[360px]:text-[14px]"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
