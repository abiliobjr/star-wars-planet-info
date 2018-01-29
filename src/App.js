import React, { Component } from 'react';
import Infobox from './components/Infobox';
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
        <Infobox> </Infobox>
      </div>
    );
  }
}

export default App;
