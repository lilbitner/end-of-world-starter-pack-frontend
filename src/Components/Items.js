import React from 'react'
import NavBar from './NavBar'
import Header from './Header'
import Card from './Card'

export default class Items extends React.Component{
    
    
    showItems = (props) => {
        return this.props.items.map(item => {
           return <Card item={item} key={item.id} addItem={this.props.addItemToCart} />
        })
    }


    render() {
        return(
          <>
          <NavBar />
          <div className='cardContainer'> 
            {this.showItems()}
          </div>
          </>
        )
    }
}