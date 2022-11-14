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
        <a href="javascript:void(0)">Sobre Mim</a>
        <a href="javascript:void(0)">Skills</a>
        <a href="javascript:void(0)">Projetos</a>
        <a href="javascript:void(0)">Contato</a>
      </nav>
      <button id="navBtn" className="hide" onClick={() => {document.getElementById("headerMenu").style.width = "85%"}}>
        <FaBars/>
      </button>
      <div id="headerMenu">
        <a href="javascript:void(0)" id="navBtnClose" onClick={() => { document.getElementById("headerMenu").style.width = "0"}}>
          &times;
        </a>
        <div className="headerAnchors2">
          <a href="javascript:void(0)">Sobre mim</a>
          <a href="javascript:void(0)">Skills</a>
          <a href="javascript:void(0)">Projetos</a>
          <a href="javascript:void(0)">Contato</a>

        </div>
      </div>
    </div>
  )
}