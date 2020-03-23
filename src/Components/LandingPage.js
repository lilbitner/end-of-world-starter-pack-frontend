import React from 'react'
import VirusImg from '../Images/virus2.png'
import '../Styles/LandingPage.css'


export default function LandingPage(props) {
    
    return(
        <div className="LandingPage-container">

        <img className="LandingPage-virus-image" src={VirusImg} alt="LangingPage-virus"/>

            <div className="text-container">
                <h1 className="LandingPage-text"> The Year is 2020.</h1>
                <h3 className="LandingPage-sub-text"> A virus has hit worldwide and you need to quarantine. </h3>
            <button className='enterButton' onClick={() =>  props.history.push('/items')}>
                Enter
            </button>
            </div>
        </div>
    )
}