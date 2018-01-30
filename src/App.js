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
    this.apiConsult = this.apiConsult.bind(this);
  }

  apiConsult(){
    let initial = "https://swapi.co/api/planets/?format=json&page=1" ;
    let posts;
    axios.get(initial)
    .then(res => {
        posts = res.data;
        let randNumber = Math.floor(Math.random() * posts.count + 1);
        axios.get(`https://swapi.co/api/planets/${randNumber}/`)
          .then(resp => {
            //modificando a lista de urls pelo tamanho do array
            resp.data.films = resp.data.films.length;
            this.setState({planets: resp.data});
          });
      });
  }

  componentWillMount(){
    document.title = "Informação de planetas Star Wars"
    this.apiConsult();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Infobox
          name={this.state.planets.name}
          climate={this.state.planets.climate}
          terrain={this.state.planets.terrain}
          films={this.state.planets.films}
          btnFunc={this.apiConsult}
        />
      </div>
    );
  }
}

export default App;
