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
    <div className="aboutMecontainer">
      <h1 id="aboutMe">Sobre mim</h1>

      <div className="content">
        <div className="profile" data-aos="fade-right">
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
        <div className="contentText" data-aos="fade-left">
          <p className="text">
            Olá mundo!! me chamo Elyas Rodrigues, tenho 19 anos e sou natural do RJ, porém atualmente moro no interior do Maranhão desde 2015.  
            <br/>
            Sei que é muito clichê, mas desde muito novo sempre fui fascinado pela tecnologia, passava horas na frente de uma tela. Sempre quando eu usava algo relacionado a tecnologia, desde uma simples calculadora a um 'moderno' computador, eu sempre me perguntava: "como isso funciona?". Até que em 2021 eu conheci a programação e foi ali que as peças começaram a se encaixar, e a partir daquele momento não demorou muito para descobrir que era isso que eu queria para minha vida.
            <br/>
            <br/>
            Enfim, espero que possamos trabalhar juntos algum dia. 🤝
          </p>
        <div>
      </div>
        </div>
      </div>
    </div>
  )
}