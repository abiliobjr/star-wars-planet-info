import Button from './Button';
import React, { Component } from 'react';
import axios from 'axios';

class Infobox extends Component {
  render() {
      const {
        name,
        climate,
        diameter,
        terrain,
        films,
        population,
      } = this.props.planet;
    return <div className="container">
        <h1>{name}</h1>
        <div className="planet-info">
            <h3>Clima: </h3>
            <p>{climate}</p>
            <h3>Diametro: </h3>
            <p>{diameter}</p>
            <h3>Terreno</h3>
            <p>{terrain}</p>
            <h3>Apareceu em</h3>
            <p>{films}</p>
            <h3>População: </h3>
            <p>{population}</p>
            {
              this.props.names.length > 0 &&
              <React.Fragment>
                <h3>Personagens nascidos no planeta: </h3>
                <p>{" " + this.props.names}</p>
              </React.Fragment>
            }
        </div>
        <Button text="Próximo" nextPlanet={this.props.btnFunc}/>
    </div>
  }
}

export default Infobox;