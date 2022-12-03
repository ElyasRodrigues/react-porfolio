import "./card.css"
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Card(props){
  useEffect(() => {
    AOS.init({duration: 2000})
  })
  return(
    <div className="card" data-aos="zoom-in-down">
      <img src={props.img} alt="image"/>
      <div className="cardText">
        <h2>{props.title}</h2>
        <h4>{props.subtitle}</h4>
      </div>
      <span className="cardBtns">
        <a href={props.project} target="blank">Ver projeto</a>
        <a href={props.repository} target="blank">Repositório</a>
      </span>
    </div>
  )
}