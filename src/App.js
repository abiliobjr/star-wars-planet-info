import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentWillMount(){
    document.title = "Informação de planetas Star Wars"
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div class="container">
          <h1>Nome do Planeta</h1>
          <div class="planet-info">
            <h3>Clima</h3>
            <p>tipo de clima</p>
            <h3>Terreno</h3>
            <p>tipo de terreno</p>
            <h3>Apareceu em</h3>
            <p>2 filmes</p>
          </div>
          <button type="button">Next</button>
        </div>
      </div>
    );
  }
}

export default App;
