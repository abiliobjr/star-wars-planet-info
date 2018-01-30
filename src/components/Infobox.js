import Button from './Button';
import React, { Component } from 'react';

class Infobox extends Component {
  render() {
    return (<div className="container">
        <h1>{this.props.name}</h1>
        <div className="planet-info">
            <h3>Clima: </h3>
            <p>{this.props.climate}</p>
            <h3>Terreno</h3>
            <p>{this.props.terrain}</p>
            <h3>Apareceu em</h3>
            <p>{this.props.films}</p>
        </div>
        <Button text="Próximo" nextPlanet={this.props.btnFunc}/>
    </div>);
  }
}

export default Infobox;