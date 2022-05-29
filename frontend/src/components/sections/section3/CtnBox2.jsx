import React from 'react';
import '../App.css';

const CtnBox2 = () => {

    return (
        <>
            <div className='card'>
                <br />
                <div className='card-header text-center'>
                    <h4>Detalle del pedido</h4>
                </div>
                <div className='card-body'>
                    <table className='tableCotizar'>
                        <br />
                        <tr>
                            <th>Cantidad</th>
                            <label className='cant'>X</label>
                        </tr>

                        <tr>
                            <th>Valor unitario</th>
                            <label className='valorUni'>X</label>
                        </tr>

                        <tr>
                            <th>Valor total</th>
                            <label className='total'>XXXXXX</label>
                        </tr>

                        <tr>
                            <th>Descripción del pedido</th>
                            <label className='descripcion'>XXXXXXXXXX</label>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}
export default CtnBox2;