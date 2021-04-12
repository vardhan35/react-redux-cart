import * as actionTypes from './shopping-types'

const initialState ={
    products : [
        {
            id : 1,
            name : 'iphone',
            price : 80000
        },
        {
            id : 2,
            name : 'iphone-11',
            price : 85000
        },
        {
            id : 3,
            name : 'iphone-12',
            price : 90000
        },
        {
            id : 4,
            name : 'Note20',
            price : 100000
        },
    ],
    cart :[],
}

const shopReducer =(state=initialState, action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART :
            const item = state.products.find(prod => prod.id === action.payload.id);
            const inCart = state.cart.find((item)=> item.id === action.payload.id ? true : false);
            return{
                ...state,
                cart : inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty : item.qty + 1} : item) : [...state.cart, {...item, qty : 1}],
            };
        case actionTypes.REMOVE_FROM_CART :
            return{
                ...state, 
                cart : state.cart.filter(item => item.id !== action.payload.id),
            }
        case actionTypes.ADJUST_QTY : 
        return{
            ...state,
            cart : state.cart.map(item => item.id === +action.payload.id ? {...item, qty : action.payload.qty} : item)
        }
        default :
            return state
    }
}

export default shopReducer