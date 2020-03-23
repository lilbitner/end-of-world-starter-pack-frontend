import React from 'react'
import '../Styles/Card.css'

export default function Card(props){
    
   const handleClick = (item) => {
       return props.addItem(item)
   } 

    return(
        <div className='card'> 
            <h3>{props.item.name}</h3>
            <img id='cardImage' src={props.item.image} /> 
            <button onClick={handleClick} id='cartButton'>Add to Cart</button>
        </div>
        
    )
}