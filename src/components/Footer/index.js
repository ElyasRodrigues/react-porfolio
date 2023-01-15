import "./footer.css"

export default function Footer(){
  let currentYear = new Date().getFullYear()

  return(
    <div className="footerContainer">
      <h4>Desenvolvido por Elyas Rodrigues</h4>
      <h5>&copy; {currentYear}</h5>
    </div>
  )
}