import React from 'react';
import '../App.css';

const CtnBox1 = () => {

    return (
        <>
            <div>
                <table className="tableCotizar">
                    <br/>
                    <p>Realice una cotización de un pedido, con el valor unitario que usted considere conveniente.</p>
                    <tr>
                        <th>Cantidad</th>
                        <label className="cant">X</label>
                    </tr>

                    <tr>
                        <th>Valor unitario</th>
                        <label className="valorUni">X</label>
                    </tr>

                    <tr>
                        <th>Valor total</th>
                        <label className="total">XXXXXX</label>
                    </tr>

                    <tr>
                        <th>Descripción del pedido</th>
                        <label className="descripcion">XXXXXXXXXX</label>
                    </tr>

                    <button className="button btn-primary btnEnviar">Enviar</button>
                </table>
            </div>
            <script type="text/javascript" src="cotizar.js"></script>
        </>
    )
}


export default CtnBox1;

 