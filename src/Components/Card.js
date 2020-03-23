import React from 'react'
import '../Styles/Card.css'

export default function Card(props){
    
   const handleClick = () => {
       return props.addItem(props.item)
   } 

   const handleRemoveItem = () => {
       return props.removeItem(props.item)
   }

    return(
        <div className='card'> 
            <h3>{props.item.name}</h3>
            <img id='cardImage' src={props.item.image} /> 
            
            {props.removeItem
            ? <button onClick={handleRemoveItem}>Remove Item</button> 
            : <button onClick={handleClick} id='cartButton'>Add to Cart</button>
            }
        </div>
        
    )
}