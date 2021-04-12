import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'

const Products = ({products}) => {
    return (
        <div>
            {
                products.map((prod)=>(
                    <Product key={prod.id} productData = {prod}/>
            ))}
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        products : state.shop.products
    }
}
export default connect(mapStateToProps)(Products)
