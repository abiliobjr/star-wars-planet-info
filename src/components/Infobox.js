import Button from './Button';
import React, { Component } from 'react';

class Infobox extends Component {
  render() {
    return (<div className="container">
        <h1>{this.props.nome}</h1>
        <div className="planet-info">
            <h3>Clima: </h3>
            <p>{this.props.clima}</p>
            <h3>Terreno</h3>
            <p>{this.props.terreno}</p>
            <h3>Apareceu em</h3>
            <p>{this.props.quantidade}</p>
        </div>
        <Button texto="Próximo" proxPlaneta={this.props.funcaoBtn}/>
    </div>);
  }
}

export default Infobox;