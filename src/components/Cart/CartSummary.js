import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

const CartSummary = ({cart}) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems , setTotalItems] = useState(0);
    
    useEffect(()=>{
        let items = 0;
        let price = 0;

        cart.forEach(item =>{
            items += item.qty;
            price += item.qty*item.price;
        })
        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalItems, setTotalPrice])

    return (
        <div className='sumary'>
            <span className='sum' >TOTAL :{totalItems} items</span>
            <span className='sum' >{totalPrice} RS /-</span>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        cart : state.shop.cart
    }
}
export default connect(mapStateToProps)(CartSummary)
