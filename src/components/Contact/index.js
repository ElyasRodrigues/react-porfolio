import { useEffect, useState } from "react"
import "./contact.css"
import { FaWhatsapp } from "react-icons/fa"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"
import AOS from "aos"
import 'aos/dist/aos.css';

export default function Contact(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])


  const sendEmail = (e) => {
    e.preventDefault()

    if(name === "" || email === "" || message === ""){
      toast.warning("Por favor, preencha todos os campos!!")
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_3oue9nk", "template_8ivprki", templateParams, "kN3xYmPuWvs61QbsK")
    .then((res) => {
      toast.success(`Olá ${name}, seu email foi enviado com sucesso!!`)
      console.log(res);
      setName("")
      setEmail("")
      setMessage("")
    }, (error) => {
      toast.error(`Não foi possível enviar o Email! :(
        "Tente novamente mais tarde!`)
      console.log("Erro: " , error);
    })

  }

  return(
    <div className="contactContainer" data-aos="zoom-in-up">
      <h1 id="contact">Contato</h1>

      <div className="contactContent" >

        <form className="contactForm" onSubmit={sendEmail}>
          <label>Seu nome:</label>
          <input className="styleInput"
            type="text"
            placeholder="Digite seu nome.."
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label>Seu email:</label>
          <input className="styleInput"
            type="email"
            placeholder="Digite seu Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea className="styleInput"
            placeholder="Digite sua mensagem.."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button>Enviar</button>
        </form>
      </div>
      <div className="whatsappContent">
        <h3>Ou se preferir, me chama no..</h3>
        <a className="zapIcon" href="https://wa.me/98988149744?text=Ol%C3%A1,%20vi%20seu%20portf%C3%B3lio%20e%20voc%C3%AA%20se%20encaixa%20no%20que%20eu%20procuro,%20meu%20nome%20%C3%A9"><FaWhatsapp/></a>
      </div>
    </div>
  )
}