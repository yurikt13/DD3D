import React from 'react';
import herramientas from '../section1/img1/herramientas.png';
import '../App.css';

const CtnBox3 = () => {

    return (
        <>
            <div className="card px-1 py-3 pt-md-5 pb-md-4 mx-auto bg-info text-center text-white border-dark">
                    <h5 className="card-title">Herramientas de mi dominio</h5>
                    <img className="card-img center imgHerramientas" src={herramientas} alt=""/>
                </div>
        </>
    )
}


export default CtnBox3;




