import "./card.css"

export default function Card(props){
  return(
    <div className="card">
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