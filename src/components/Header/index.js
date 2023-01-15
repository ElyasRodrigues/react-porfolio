import "./header.css"
import logo from "./logo"
import { FaBars } from "react-icons/fa"

export default function Header(){
return(
    <header className="headerContainer">
      <div className="logo">
      <span>
        {logo()}
      </span>
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
        <nav className="headerAnchors2">
          <a href="#aboutMe">Sobre mim</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>

        </nav>
      </div>
    </header>
  )
}