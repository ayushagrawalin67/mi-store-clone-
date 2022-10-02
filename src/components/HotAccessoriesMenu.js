import React from 'react'
import {Link} from "react-router-dom"
import "../HotAccesoriesMenu.css"

const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
    <Link to="/music" className='HotAccessoriesLink'>Music Store </Link>
    <Link to="/smartDevices" className='HotAccessoriesLink'>Smart Devices</Link>
    <Link to="/home" className='HotAccessoriesLink'>Home</Link>
    <Link to="/lifeStyle" className='HotAccessoriesLink'>Life Style</Link>
    <Link to="/mobileaccessories" className='HotAccessoriesLink'>Mobile Accessories</Link>
    </div>
  )
}

export default HotAccessoriesMenu