import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../redux/shopping/shopping-actions'

const Product = ({productData, addToCart}) => {
    return (
        <div className='product'>
            <h2>{productData.name}</h2>
            <h3>{productData.price} INR</h3>
            <button type='button' className='button' onClick={()=>addToCart(productData.id)}>Add To Cart </button>
        </div>
    )
}
const mapDispatchToProps = dispatch =>{
    return{
        addToCart : (id)=>dispatch(addToCart(id))
    }
}
export default connect(null, mapDispatchToProps)(Product)
