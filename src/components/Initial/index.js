import "./initial.css"

export default function Initial (){
  return (
    <div className="container">
      <div className="textArea">
        <p>Olá, me chamo <span id="myName">Elyas Rodrigues</span> e posso ser seu novo <span id="myName">desenvolvedor front-end</span></p>

        <button><a href="#contact">Contato</a></button>
      </div>
      <div className="imgArea">
        <img src="/assets/images/initialimg.png"/>
      </div>
    </div>
  )
}