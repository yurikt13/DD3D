import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const CtnBox1 = () => {

    return (
        <>
            <div>
                <table className='tableCotizar'>
                    <br />
                    <p>Realice una cotización de un pedido, con el valor unitario que usted considere conveniente.</p>
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
                    <Link to="/detallePedido" className="text-decoration-none">
                    <a class='btn btn-primary btnEnviar'>Enviar</a>
                    </Link>
                </table>
            </div>
            <script type='text/javascript' src='cotizar.js'></script>
        </>
    )

    //1. Definir variables
    //1.1 Zona de entrada(parte superior), declaración y valor a cada una de las variables

    let cantidad = 0;
    let valorUnitario = 0;
    let valorTotal = 0;
    let descripcionPedido = '';

    //1.2 Zona de procesos
    cantidad = parseInt(prompt('Ingrese la cantidad de unidades que requiere'));
    valorUnitario = parseInt(prompt('Ingrese el valor del producto'));

    //-Invocar una función para poner en términos las variables a utilizar
    valorTotal = calcularValorTotal(cantidad, valorUnitario);


    //-Calcular la función invocada

    //zona salida
    alert(`EL valor total del pedido es: ${valorTotal}`);

    function calcularValorTotal(C, VU) {
        return (C * VU);
    }



    //Cambiar los valores de la tabla 
    let cantidadElement = document.querySelector('.cant')
    cantidadElement.innerHTML = cantidad;

    let valorUnitarioElement = document.querySelector('.valorUni');
    valorUnitarioElement.innerHTML = valorUnitario;

    let valorTotalElement = document.querySelector('.total');
    valorTotalElement.innerHTML = valorTotal;

    let descripcionPedidoElement = document.querySelector('.descripcion');
    descripcionPedidoElement.innerHTML = descripcionPedido;
}

export default CtnBox1;

