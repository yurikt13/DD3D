import React from 'react';
import carlos from '../section1/img1/carlos.jpg';
import '../App.css';

const Pricing = () => {

    return (
        <>
                <div className="card px-1 py-3 pt-md-5 pb-md-4 mx-auto border-dark">
                    <div className="row no-gutters border-dark">
                         <div className="col-md-4 border-dark">
                            <img src={carlos} className="card-img center" alt="Carlos"></img>
                         </div>
                         <div className="col-md-8 text-left border-dark">
                            <div className="card-body">
                                <h4 className="card-title">Hola, soy Carlos David Pérez</h4>
                                <p className="card-text"><small className="text-muted">Y SOY DISEÑADOR GRÁFICO</small></p>
                                <p className="card-text">¡Hola! Si estás aquí es porque quieres saber un poco más sobre mi, por eso, te voy a contar un poco quien soy, a qué me dedico, y cómo te puedo ayudar.</p>
                                <p className="card-text">Nací en Barcelona capital, aunque he vivido toda la vida fuera pero muy cerca de ella. Me gusta tener la ciudad cerca, pero prefiero los sitios más tranquilos para vivir.</p>
                                <p className="card-text">Como no sabía muy bien qué estudiar, cuando llegó la hora de decidir, me puse a estudiar informática, porque era lo que más me llamaba la atención en aquel momento.</p>
                                <p className="card-text">Eso me llevó a trabajar como informático algunos años, cosa que me hizo darme cuenta de que no me gustaba lo que hacía, ni me veía toda la vida intentando arreglar los marrones de los demás.</p>
                                <p className="card-text">Por ese motivo, desde que perdí mi último trabajo, no envié ningún curriculum más y decidí dedicarme a algo que realmente me gustara.</p>
                            </div>
                         </div>
                    </div>
                </div>       
        </>
    )
};

export default Pricing;

