import React from 'react'


const Header = () => {

  return (
    <div>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a className="nav-link active text-dark bg-warning" href="#"><h4 className="text-dark">CEO</h4></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark bg-secondary" href="#"><h4 className="text-dark">Nuestra Empresa</h4></a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark bg-secondary" href="#"><h4 className="text-dark">Cotizador</h4></a>
        </li>
      </ul>
    </div>
  )
};

export default Header;