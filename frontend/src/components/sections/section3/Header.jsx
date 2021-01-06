import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../section1/img1/logo1.png';


const Header = () => {

  return (
    <div className="Container">
    <img className="rounded mx-auto d-block" src={logo} alt=""/>
    <div>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link to="/" className="text-decoration-none">
          <a className="nav-link active text-dark bg-secondary navCeo" href="#"><h5 className="text-dark">CEO</h5></a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/nuestraEmpresa" className="text-decoration-none">
          <a className="nav-link text-dark bg-secondary navNuestraempre" href="#"><h5 className="text-dark">Nuestra Empresa</h5></a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cotizador" className="text-decoration-none">
          <a className="nav-link text-dark bg-warning navCotizador" href="#"><h5 className="text-dark">Cotizador</h5></a>
          </Link>
        </li>
      </ul>
    </div>
    </div>
  )
};

export default Header;