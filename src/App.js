import React, {
  Component
} from 'react';
import axios from 'axios';

import Infobox from './components/Infobox';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: [],
      names: [],
      totalOfPlanets: 1
    };
    this.apiConsult = this.apiConsult.bind(this);
  }

  apiConsult(totalOfPlanets) {
    this.setState({
      planet: [],
      names: []
    })
    const randNumber = Math.floor(Math.random() * totalOfPlanets + 1);
    axios.get(`https://swapi.co/api/planets/${randNumber}/`)
      .then(resp => {
        resp.data.films = resp.data.films.length;
        resp.data.residents.map(link => {
          axios.get(link)
            .then(namesResponse => {
              this.setState({
                names: [namesResponse.data.name, this.state.names]
              });
            })
        })
        this.setState({
          planet: resp.data
        });
      });
  }

  getNumberOfPlanets() {
    axios.get('https://swapi.co/api/planets/?format=json&page=1')
      .then(response => {
        this.setState({ totalOfPlanets: response.data.count })
      })
      .catch(error => {
        console.error("Erro ao setar quantidade de planetas", error)
      })
  }
  
  componentDidMount() {
    document.title = "Informação de planetas Star Wars"
    this.getNumberOfPlanets();
    this.apiConsult(this.state.totalOfPlanets);
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header" >
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Infobox
          planet={this.state.planet}
          names={this.state.names}
          btnFunc={() => this.apiConsult(this.state.totalOfPlanets)}
        />
      </div>
    );
  }
}

export default App;