import Header from "../../components/Header"
import Initial from "../../components/Initial"
import AboutMe from "../../components/AboutMe"
import Skills from "../../components/Skills"
import Projects from "../../components/Projects"
import Contact from "../../components/Contact"
import Footer from "../../components/Footer"
import "./home.css"

export default function Home(){
  return(
    <div className="homeContainer">
      <Header/>
      <Initial/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}