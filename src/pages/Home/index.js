import AboutMe from "../../components/AboutMe"
import Contact from "../../components/Contact"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Projects from "../../components/Projects"
import Skills from "../../components/Skills"
import "./home.css"

export default function Home(){
  return(
    <div className="homeContainer">
      <Header/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}