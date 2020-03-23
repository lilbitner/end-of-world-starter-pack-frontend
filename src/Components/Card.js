import React from 'react'
import '../Styles/Card.css'

export default function Card(props){
    
    

    return(
        <div className='cardContainer'> 
            <div className='card'> 
                <h3>{props.item.name}</h3>
                <img id='cardImage' src={props.item.image} /> 
            </div>
        </div>
    )
}