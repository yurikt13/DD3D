import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CtnBox2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { datos } = this.props
        return (
            <div className="Container border-dark">
                <h4 className="card-title  mb px-1 py- pt-md-5 pb-md-2 mx-auto text-center">¿Cómo puedo ayudarte?</h4>
                <div className="card-deck mb-3 px-1 py-3 pt-md-3 pb-md-4 mx-auto text-center cardHelp">
                    {datos.map((pricing, index) => {
                        return (
                            <div key={`pricing-${index}`} className="card mb-5 bg-warning white-sm text-white border-primary">
                                <div className="card-header">
                                    <h4 className="my-0 font-weight-normal">{pricing.title}</h4>
                                    <div className="card-body">
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>{pricing.info}</li>
                                        </ul>
                                        <Link to="/moreInfo1" className="text-decoration-none">
                                        <button type="button" className="btn btn-lg btn-block btn-outline-warning bg-white border-dark">{pricing.buttonInfo}</button>
                                        </Link>
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
