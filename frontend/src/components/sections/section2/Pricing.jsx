import React from 'react';
import imgQuienesSomos from '../section2/img2/quienesSomos.jpg';
import '../App.css';

const Pricing = () => {

    return (
        <>
                <div className="card px-1 py-3 pt-md-5 pb-md-4 mx-auto border-dark">
                    <div className="row no-gutters border-dark">
                         <div className="col-md-4 border-dark">
                            <img src={imgQuienesSomos} className="card-img center" alt="¿Quienes Somos?"></img>
                         </div>
                         <div className="col-md-8 text-left border-dark">
                            <div className="card-body">
                                <h4 className="card-title">Quienes Somos</h4>
                                <p className="card-text"><small className="text-muted">DISEÑO DIGITAL 3D</small></p>
                                <p className="card-text">Somos una empresa Colombiana de Innovación y Diseño</p> 
                                <p className="card-text">Digital ubicada en Medellín, Antioquia.</p>
                                <p className="card-text">Con más de 10 años acumulados de experiencia en el </p>
                                <p className="card-text">desarrollo de diseños digitales y otras herramientas de </p>
                                <p className="card-text">Tecnología, Entornos Web y Desarrollo Móvil.</p>
                            </div>
                         </div>
                    </div>
                </div>       
        </>
    )
};

export default Pricing;

