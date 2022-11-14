import "./skills.css"

export default function Skills(){
  return(
    <div className="skillsContainer">
      <h1 id="skills"> Skills </h1>
      <div className="skillsContent">
        <ul className="skillsList">
          <li className="skillsItem">
            <img src="/assets/images/html5-colored.svg" alt="jhtml5-logo" title="HTML5"/>
          </li>
          
          <li className="skillsItem">
            <img src="/assets/images/css3-colored.svg" alt="css3-logo" title="CSS3" />
          </li>

          <li className="skillsItem">
            <img src="/assets/images/javascript-colored.svg" alt="javascript-logo" title="JAVASCRIPT"/>
          </li>

          <li className="skillsItem">
            <img src="/assets/images/sass-colored.svg" alt="sass-logo" title="SASS"/>
          </li>
          
          <li className="skillsItem" id="git">
            <img src="/assets/images/react-colored.svg" alt="sass-logo" title="REACT JS"/>
          </li>

          <li className="skillsItem">
            <img src="/assets/images/bootstrap-colored.svg" alt="bootstrap-logo" title="BOOTSTRAP"/>
          </li>
        </ul>
      </div>
    </div>
  )
}