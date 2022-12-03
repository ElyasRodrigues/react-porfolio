import "./header.css"
import { FaBars } from "react-icons/fa"

export default function Header(){
return(
    <div className="headerContainer">
      <div className="logo">
        <h2>Elyas Rodrigues 👨🏻‍💻</h2>
        <h4>Dev Front - end</h4>
      </div>
      <nav className="anchors" id="headerAnchors">
        <a href="#aboutMe">Sobre Mim</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>
      <button id="navBtn" className="hide" onClick={() => {document.getElementById("headerMenu").style.width = "85%"}}>
        <FaBars/>
      </button>
      <div id="headerMenu">
        <button href="#" id="navBtnClose" onClick={() => { document.getElementById("headerMenu").style.width = "0"}}>
          &times;
        </button>
        <div className="headerAnchors2">
          <a href="#aboutMe">Sobre mim</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>

        </div>
      </div>
    </div>
  )
}