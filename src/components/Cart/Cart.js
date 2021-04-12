import React from 'react'
import { connect } from 'react-redux'
import CartSummary from './CartSummary'
import CartItem from './CartItem'

const Cart = ({cart, removeFromCart, adjustQty}) => {

    return (
        <div className="cart-main">
            <div className="cart-list">
            {
                cart.length === 0 ? <h1>cart Empty</h1> : cart.map((prodt)=>(
                    <CartItem key={prodt.id} prodtData={prodt}/>
                ))}
            </div>
            <CartSummary/>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        cart : state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart)
