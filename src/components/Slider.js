import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import pkg from "../data/data.json"

const banner = pkg.banner

const Slider = ({start,end}) => {
  return (
    <Carousel fade> 
            {start && banner.start.map((item)=>
        (
            <Carousel.Item>
            <img className='d-block w-100'
            src = {item} 
            alt = "images"
            />
            </Carousel.Item>

))}
  {end && banner.end.map((item,index)=>
        (
            <Carousel.Item key={item.image} keyboard ={true} interval={1000}>
            <img className='d-block w-100'
            src = {item.image} 
            alt = {`${index} banner`}
            />
          
            <Carousel.Caption>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.source}</p>
              <u>Read More</u>
            </Carousel.Caption>
            </Carousel.Item>

))}
    
        



    </Carousel>
  )
}

export default Slider