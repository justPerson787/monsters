import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [], 
      searchFiled: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchFiled: e.target.value });
  }; //arrow f-n bind any references inside to the context of the component so we do not need class' bind method

  render() {
    const { monsters, searchFiled } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
      )
    return (
      <div className="App">
        <SearchBox  
          placeholder='search monsters' 
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />        
             
      </div>
    );
  }
}

export default App;
