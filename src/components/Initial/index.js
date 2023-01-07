import "./initial.css"

export default function Initial (){
  return (
    <section className="container">
      <div className="textArea">
        <p>Olá, me chamo</p>
        <p id="name">Elyas Rodrigues</p>
        <p> e posso ser seu novo </p>
        <p id="dev">desenvolvedor front-end</p>
        <button><a href="#contact">Contato</a></button>
      </div>
      <div className="imgArea">
        <img src="/assets/images/initialimg.png"/>
      </div>
    </section>
  )
}