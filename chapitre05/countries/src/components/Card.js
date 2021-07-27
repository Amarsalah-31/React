import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-6 offset-3">
                        <img className="img-fluid" src={this.props.flag} alt={this.props.name}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 offset-3">
                        <p>name: {this.props.name}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 offset-3">
                        <p>capital: {this.props.capital}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 offset-3">
                        <p>population: {this.props.population}</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 offset-3">
                        <p>region: {this.props.region}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default Card;