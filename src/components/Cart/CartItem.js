import React, {useState} from 'react'
import { connect } from 'react-redux'
import { adjustQty, removeFromCart } from '../../redux/shopping/shopping-actions'


const CartItem = ({prodtData, adjustQty, removeFromCart}) => {
    const [input, setInput] = useState(prodtData.qty);
    const onChangeHandler = (e)=>{
        setInput(e.target.value);
        adjustQty(prodtData.id ,e.target.value)
    }
    return (
        <div className="cart" key ={prodtData.id}>
                    <h2>{prodtData.name}</h2>
                <h3>{prodtData.price}</h3>
                <div className="cart-ops">
                <div className="qty">
                    <label htmlFor="qty">Qty : </label>
                    <input min="1" type="number" id="qty" name="qty" value={input} onChange={onChangeHandler} />
                </div>
                <button type='button' className='button' onClick={()=>removeFromCart(prodtData.id)}>Remove From Cart</button>
                </div>
        </div>
    )
}
const mapDispatchToProps = dispatch =>{
    return{
        removeFromCart : (id) => dispatch(removeFromCart(id)),
        adjustQty : (id, value) => dispatch(adjustQty(id, value))
    }
}

export default connect(null , mapDispatchToProps)(CartItem)
