import React, { Component } from 'react';
import axios from 'axios';

import Infobox from './components/Infobox';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: [],
      names: []
    };
    this.apiConsult = this.apiConsult.bind(this);
  }

  apiConsult(){
    let initial = "https://swapi.co/api/planets/?format=json&page=1" ;
    let posts;
    this.setState({planets: [], names: []})
    axios.get(initial)
    .then(res => {
        posts = res.data;
        let randNumber = Math.floor(Math.random() * posts.count + 1);
        axios.get(`https://swapi.co/api/planets/${randNumber}/`)
          .then(resp => {
            //modificando a lista de urls pelo tamanho do array
            resp.data.films = resp.data.films.length;
            resp.data.residents.map(link => {
              axios.get(link)
                .then(namesResponse => {
                  console.log(namesResponse.data.name)
                  this.setState({names: [namesResponse.data.name, this.state.names]});
                })
            })
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
          planet={this.state.planets}
          names={this.state.names}
          btnFunc={this.apiConsult}
        />
      </div>
    );
  }
}

export default App;
