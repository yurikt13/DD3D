import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../section1/img1/logo1.png';
import '../App.css';


const Header = () => {

  return (
    <div className="Container">
      <div>
       <img className="rounded mx-auto d-block mt-5" src={logo} alt=""/>
      </div>
      <div>
       <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link to="/" className="text-decoration-none">
          <a className="nav-link active text-dark bg-warning navCeo" href="#"><h5 className="text-dark">CEO</h5></a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/nuestraEmpresa" className="text-decoration-none">
          <a className="nav-link text-dark bg-secondary navNuestraempre" href="#"><h5 className="text-dark">Nuestra Empresa</h5></a>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cotizador" className="text-decoration-none">
          <a className="nav-link text-dark bg-secondary navCotizador" href="#"><h5 className="text-dark">Cotizador</h5></a>
          </Link>
          <br/>
        </li>
       </ul>
      </div>
    </div>
  )
};

export default Header;