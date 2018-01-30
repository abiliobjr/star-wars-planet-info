import React, { Component } from 'react';
import axios from 'axios';

import Infobox from './components/Infobox';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: []
    };
  }

  
  consultarAPI(){
    let initial = "https://swapi.co/api/planets/?format=json&page=1" ;
    let posts;
    axios.get(initial)
    .then(res => {
        posts = res.data;
        let numeroRand = Math.floor(Math.random() * posts.count + 1);
        axios.get(`https://swapi.co/api/planets/${numeroRand}/`)
          .then(resp => {
            resp.data.films = resp.data.films.length;
            this.setState({planets: resp.data});
          });
      });
  }

  componentWillMount(){
    document.title = "Informação de planetas Star Wars"
    this.consultarAPI();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Infobox
          nome={this.state.planets.name}
          clima={this.state.planets.climate}
          terreno={this.state.planets.terrain}
          quantidade={this.state.planets.films}
          funcaoBtn={this.consultarAPI}
        />
      </div>
    );
  }
}

export default App;
