import React,{useState, useEffect} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
export const image = `https://www.j2store.org/images/themeparrot/home_page/shopping-cart.png`

const Navbar = ({cart}) => {
    const [count, setcount] = useState(0);
    useEffect(()=>{
        let count = 0;
        cart.forEach(item => {
            count += item.qty;
        });
        setcount(count)
    }, [cart, count])
    return (
        <div className='navbar'>
            <Link to = '/'><h1 className='nav-logo'>ReduxCart</h1></Link>
            <div className="nav-cart">
            <Link to = '/cart'className='link' ><img src={image} alt="" className='nav-img'/></Link>
            <h2 className='cartvalue'>{count}</h2>
            </div>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        cart : state.shop.cart
    }
}
export default connect(mapStateToProps)(Navbar)
