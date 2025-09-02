import "./skills.css";

function Skills() {
  return (
    <div className="skill" id="skill">
      <div>
        <h1>Sobre mim</h1>
      </div>
      <div className="sobre">
        <div className="abaut">
          <h3 className="name">Viviane Cristina</h3>
          <h4>Desenvolvedora Front-End em constante crescimento e evolução.</h4>
          <div className="about">
            <p>
              Crio páginas web com as ferramentas mais atuais do mercado, sempre
              busco estar atualizada e preparada me dedicando aos estudos para
              sempre estar encontrando a melhor versão de mim mesma.
            </p>
            <p>
              Desde criança sou apaixonada por tecnologia, filmes, séries e
              jogos. Por isso foi muito fácil escolher qual carreira seguir.
              Quero por meio da tecnologia mudar não apenas a minha vida e a
              vida das pessoas que amo, mas também a vidas de milhares de
              pessoas ao redor do mundo.
            </p>
          </div>
        </div>

        <div className="containers">
          <h3>Habilidades</h3>
          <div className="learned">
            <strong className="ability">HTML</strong>
            <div className="line"></div>
            <strong className="ability">CSS</strong>
            <div className="line"></div>
            <strong className="ability">JavaScript</strong>
            <div className="line"></div>
            <strong className="ability">React</strong>
            <div className="line"></div>
            <strong className="ability">TypeScript</strong>
            <div className="line"></div>
            <duv className="skil-container">
              <strong className="skil">Tailwind</strong>
              <strong className="skil">Git</strong>
            </duv>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
