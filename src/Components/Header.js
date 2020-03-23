import React from 'react'
import Virus from'../Images/virus.png'
import '../Styles/Header.css'

export default function Header() {
    return (
        <div className="header-container">
           <img className="virus" src={Virus} alt="virus" />
        </div>
    )
}
