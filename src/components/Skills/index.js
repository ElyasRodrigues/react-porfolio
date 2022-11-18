import "./skills.css"
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Skills(){
  useEffect(() => {
    AOS.init({duration: 2000})
  })
  return(
    <div className="skillsContainer">
      <h1 id="skills"> Skills </h1>
      <div className="skillsContent" >
        <ul className="skillsList">
          <li className="skillsItem">
            <img src="/assets/images/html5-colored.svg" alt="jhtml5-logo" title="HTML5" data-aos="fade-right" />
          </li>
          
          <li className="skillsItem">
            <img src="/assets/images/css3-colored.svg" alt="css3-logo" title="CSS3" data-aos="fade-right" />
          </li>

          <li className="skillsItem">
            <img src="/assets/images/javascript-colored.svg" alt="javascript-logo" title="JAVASCRIPT" data-aos="fade-right"/>
          </li>

          <li className="skillsItem">
            <img src="/assets/images/sass-colored.svg" alt="sass-logo" title="SASS" data-aos="fade-right"/>
          </li>
          
          <li className="skillsItem" id="git">
            <img src="/assets/images/react-colored.svg" alt="sass-logo" title="REACT JS" data-aos="fade-right"/>
          </li>

          <li className="skillsItem">
            <img src="/assets/images/bootstrap-colored.svg" alt="bootstrap-logo" title="BOOTSTRAP" data-aos="fade-right"/>
          </li>
        </ul>
      </div>
    </div>
  )
}