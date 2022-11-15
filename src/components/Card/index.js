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
      <div className="cardText">
        <h2>{props.title}</h2>
        <h4>{props.subtitle}</h4>
        <h6>{props.description}</h6>
      </div>
      <span className="cardBtns">
        <a href={props.project} target="blank">Ver projeto</a>
        <a href={props.repository} target="blank">Repositório</a>
      </span>
    </div>
  )
}