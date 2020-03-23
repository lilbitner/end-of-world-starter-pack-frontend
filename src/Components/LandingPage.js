import React from 'react'


export default function LandingPage(props) {
    
    
    return(
        <>
        <button className='enterButton' onClick={() =>  props.history.push('/items')}>
            <h3>Gather your apocalytpic supplies here</h3>
        </button>
        </>
    )
}