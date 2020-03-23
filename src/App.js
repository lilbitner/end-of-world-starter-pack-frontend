import React from 'react';
import './App.css';
import LandingPage from './Components/LandingPage'
import Items from './Components/Items'
import Cart from './Components/Cart'
import {Route, Switch} from 'react-router-dom'

class App extends React.Component {
  
  state = {
    items: [],
    cart: []
  }
  
  componentDidMount() {
  fetch('http://localhost:3000/items')
  .then(response => response.json())
  .then(items => {
    const cart = items.filter(item => item.cart_id)
      this.setState({
        items: items,
        cart: cart 
      })
  })
  }

  addItemToCart = (item) => {
    this.setState({cart: [...this.state.cart, {...item}]
    })
    fetch(`http://localhost:3000/add_item_to_cart/${item.id}`) 
  }

  removeItemFromCart = (item) => {
    this.setState({cart: this.state.cart.filter(oldItem => oldItem.id !== item.id )
  })
  fetch(`http://localhost:3000/remove_item_from_cart/${item.id}`)
  }
  
  
  
  render() {
    return (
      <div className="App">
        <Switch> 
          {/* <LandingPage /> */}
          <Route exact path='/' component={LandingPage} />
          <Route path='/items' render={(props) => <Items items={this.state.items} addItemToCart={this.addItemToCart} />} /> 
          <Route path='/cart' render={(props) => <Cart removeItemFromCart={this.removeItemFromCart} cart={this.state.cart}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
