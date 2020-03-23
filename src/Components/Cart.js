import React from 'react'
import NavBar from './NavBar'
import Card from './Card'

export default class Cart extends React.Component {
   
    showCartItems = (props) => {
        return this.props.cart.map(item => {
           return <Card item={item} key={item.id} removeItem={this.props.removeItemFromCart} />
        })
    }
   
    render() {
        return(
            <>
            <NavBar />
            {this.showCartItems()}
            </>
        )
    }
}