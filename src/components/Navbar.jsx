import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo"> <h1>Joyeria.A.C</h1></Link>
      <ul className="menu"> 
        <li><Link className="menu-link" to="/">Inicio</Link></li>
        <li><Link className="menu-link" to="/productos">Productos</Link></li>
        <li><Link className="menu-link" to="/productos/anillo">Anillo</Link></li>
        <li><Link className="menu-link" to="/productos/aros">Aros</Link></li>
        <li><Link className="menu-link" to="/productos/cadena">Cadena</Link></li>

      </ul>
    </nav>
  )
}

export default Navbar
