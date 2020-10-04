import React from 'react'
import logo from '../section1/img1/logo1.png';


const Header = () => {

  return (
    <div className="Container">
    <img className="rounded mx-auto d-block" src={logo} alt=""/>
    <div>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a className="nav-link active text-dark bg-warning" href="#"><h5 className="text-dark">CEO</h5></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark bg-secondary" href="#"><h5 className="text-dark">Nuestra Empresa</h5></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark bg-secondary" href="#"><h5 className="text-dark">Cotizador</h5></a>
        </li>
      </ul>
    </div>
    </div>
  )
};

export default Header;