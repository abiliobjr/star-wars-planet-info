import Button from './Button';
import React, { Component } from 'react';

class Infobox extends Component {
  render() {
    return (<div class="container">
        <h1>Nome do Planeta</h1>
        <div class="planet-info">
            <h3>Clima</h3>
            <p>tipo de clima</p>
            <h3>Terreno</h3>
            <p>tipo de terreno</p>
            <h3>Apareceu em</h3>
            <p>2 filmes</p>
        </div>
        <Button> </Button>
    </div>);
  }
}

export default Infobox;