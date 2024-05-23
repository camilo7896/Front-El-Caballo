import { Link } from "react-router-dom"

const NavComponent=()=>{
  return(
    <>
    <h1 className="title">El Caballo</h1>
    <nav>
    <ul>
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/picado">Picado</Link>
      </li>
      <li>
        <Link to="/puas">Puas</Link>
      </li>
      <li>
        <a href='#'>Empaque</a>
      </li>
      <li>
        <a href='#'>Hornos</a>
      </li>
    </ul>
  </nav>   

  </>
  )
}

export default NavComponent