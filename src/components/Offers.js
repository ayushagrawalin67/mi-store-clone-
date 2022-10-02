import React from 'react'

import "../styles/Offers.css"
import pkg from "../data/data.json"

const  offer = pkg.offer

const Offers = () => {
    return (
        <div className="offersSection"> 
        {
            
            offer.map((item,index)=>(
                <a href= {item.url}> <img src={item.image} alt={`${index} offer`} /></a>
    
            )
            )
        }
    </div>
    )
}

export default Offers