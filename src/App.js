import React from 'react';
import './App.css';
import LandingPage from './Components/LandingPage'
import Items from './Components/Items'
import Cart from './Components/Cart'
import {Route, Switch} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch> 
          {/* <LandingPage /> */}
          <Route exact path='/' component={LandingPage} />
          <Route path='/items' component={Items} />
          <Route path='/cart' component={Cart}/>
        </Switch>
      </div>
    );
  }
}

export default App;
