import "./projects.css"
import Card from "../Card"
import { useState } from "react"
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs"
import { toast } from "react-toastify"

export default function Projects(){
  const [showProjectsAll, setShowProjectsAll] = useState(false)

  const showHide = () => {
    if(!showProjectsAll){
      setShowProjectsAll(true)
    } else {
      setShowProjectsAll(false)
    }
  }
return(
    <div className="projectsContainer">
      <h1 id="projects">Projetos</h1>
      <div className="projectCards">
        <Card title="Calc Js"
          subtitle="Calculadora com todas as operações básicas e troca de tema"
          description="Projeto guiado para fixação do contéudo aprendido no modúlo de javascript intermediário"
          project="#"
          repository="#"
        />
        <Card title="Tic Tac Toe"
          subtitle="O famoso jogo da velha, para 2 jogadores"
          description="Projeto prático desenvolvido em um exercício proposto no módulo de Javascript do curso One Bit Code"
          project="#"
          repository="#"
        />
        <Card title="Memory game"
          subtitle="Jogo da memória com o tema dos Vingadores"
          description="Projeto desenvolvido com javascript"
          project="#"
          repository="#"
        />
        {showProjectsAll && (
          <>
            <Card title="OneBitX"
              subtitle="Clone da página da SpaceX"
              description="Projeto proposto como exercício para fixação do contéudo aprendido no modúlo de Bootstrap do curso One Bit Code"
              project="#"
              repository="#"
            />
            <Card title="DevLink"
              subtitle="Um App Web para salvar links"
              description="Primeira experiência 'avançada' com o REACT JS, nele temos um sistema de login com página de admin, podemos adicionar e remover links. Tudo ligado com o banco de dados Firebase"
              project="#"
              repository="#"
            />
             <Card title="Qr Generate"
              subtitle="Um gerador de QrCode feito com REACT JS"
              description="Projeto desenvolvido no intuido de me familiarizar com o REACT JS"
              project="#"
              repository="#"
            />
            <Card title="Todo List"
              subtitle="Lista de Tarefa feito com Javascript"
              description="Projeto desenvolvido em JS com armazenamento de dados no Local Storage"
              project="#"
              repository="#"
            />
          </>
        )}
      </div>
      {!showProjectsAll ? (
        <>
          <button id="btnHide" onClick={showHide}><BsCaretDownFill/></button>
        </>
      ): 
      <>
        <button id="btnShow" onClick={showHide}><BsCaretUpFill/></button>
      </>}
    </div>
  )
}