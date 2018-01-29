import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentWillMount(){
    console.log("teste");
    document.title = "teste"
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Descubra as informações do planeta</h1>
        </header>
          <hr/>
        <div class="container">
          teste
        </div>
      </div>
    );
  }
}

export default App;
