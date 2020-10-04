import React, { Component } from 'react';

class CtnBox2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { datos } = this.props
        return (
            <div className="Container">
                <h4 className="card-title  mb px-1 py- pt-md-5 pb-md-2 mx-auto text-center">¿Cómo puedo ayudarte?</h4>
                <div className="card-deck border-dark mb-3 px-1 py-3 pt-md-3 pb-md-4 mx-auto text-center">
                    {datos.map((pricing, index) => {
                        return (
                            <div key={`pricing-${index}`} className="card mb-5 bg-warning white-sm text-white">
                                <div className="card-header">
                                    <h4 className="my-0 font-weight-normal">{pricing.title}</h4>
                                    <div className="card-body">
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>{pricing.info}</li>
                                        </ul>
                                        <button type="button" className="btn btn-lg btn-block btn-outline-warning bg-white">{pricing.buttonInfo}</button>
                                </div>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        );
    }
}


export default CtnBox2;
