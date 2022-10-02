import React from 'react'
import ProductReviewsCard from "./ProductReviewCard.js"
import "../styles/ProductReviews.css"
const ProductReviews = ({productReviews}) => {
  return (
    <div className='ProductReviews'>
        {
            productReviews.map((item,index)=>(
            <ProductReviewsCard image={item.image} review = {item.review} name={item.name} price={item.price} key={index}/>))
        }
    </div>
  )
}

export default ProductReviews