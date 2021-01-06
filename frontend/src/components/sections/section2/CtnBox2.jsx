import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class CtnBox2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { tableData } = this.props
        return (
            <div className="containerCtnBox1 border-dark">
                <div className="card px-1 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h4 className="card-title">Nuestros empleados</h4>
                    <div className="Container textCtnBox1">
                        {tableData.map((pricing, index) => {
                            return (
                                <div className="tableContainer">
                                    <div key={`pricing-${index}`} className="table text-center">
                                        <table>
                                            <tr>
                                                <td>{pricing.empleado}</td>
                                                <td>{pricing.edad}</td>
                                                <td>{pricing.telefono}</td>
                                                <td>{pricing.correo}</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        );
    }
}


export default CtnBox2;
