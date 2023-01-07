import { useEffect } from "react";
import "./aboutme.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import AOS from "aos"
import 'aos/dist/aos.css';

export default function AboutMe(){
  useEffect(() => {
    AOS.init({duration: 2000})
  })
  return(
    <section className="aboutMecontainer">
      <h1 id="aboutMe">Sobre mim</h1>

      <div className="content">
        <div className="profile">
          <img src="/assets/images/perfil.jpg" alt="perfil.jpg"/>
          <h3>
            Elyas Rodrigues
          </h3>
          <p className="socialNetworks">
            <a href="https://github.com/ElyasRodrigues/" target={"blank"}><FaGithub/></a>
            <a href="https://www.linkedin.com/in/elyasrodrigues/" target={"blank"}><FaLinkedin/></a>
            <a href="https://www.instagram.com/oelyasrodrigues/" target={"blank"}><FaInstagram/></a>
          </p>
        </div>
        <div className="contentText">
          <p className="text">
            Sei que é bem clichê, mas desde muito novo sempre fui fascinado pela tecnologia, passava horas na frente de uma tela. Sempre quando eu usava algo relacionado a tecnologia, desde uma simples calculadora a um 'moderno' computador, eu sempre me perguntava: "como isso funciona?". Até que eu conheci a programação, e a partir daquele momento não demorou muito para descobrir que era isso que eu queria para minha vida e atualmente estou aprimorando minhas habilidades e conhecimentos nas tecnologias mais requisitadas no front-end.
            <br/>
            <br/>
            Enfim, espero que possamos trabalhar juntos algum dia. 🤝
          </p>
        <div>
      </div>
        </div>
      </div>
    </section>
  )
}