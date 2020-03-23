import React from 'react';
import './App.css';
import LandingPage from './Components/LandingPage'
import Items from './Components/Items'
import Cart from './Components/Cart'
import {Route, Switch} from 'react-router-dom'

class App extends React.Component {
  
  state = {
    items: []
  }
  
  componentDidMount() {
  fetch('https://rickandmortyapi.com/api/character/')
  .then(response => response.json())
  .then(characters => {
      this.setState({
        items: characters.results
      })
  })
  }
  
  
  
  render() {
    return (
      <div className="App">
        <Switch> 
          {/* <LandingPage /> */}
          <Route exact path='/' component={LandingPage} />
          <Route path='/items' render={(props) => <Items items={this.state.items} />} /> 
          <Route path='/cart' component={Cart}/>
        </Switch>
      </div>
    );
  }
}

export default App;
