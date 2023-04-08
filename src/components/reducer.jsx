const reducer = (state,action) => {
    if (action.type === 'CLEAR_CART') {
        return {...state, cart: []}
    }
    if (action.type === 'REMOVE') {
        return{
            ...state,
            cart: state.cart.filter((cardItem) => cardItem.id !== action.payload)
        }
    }
    if (action.type === 'INC') {
        let tempCart = state.cart.map((cardItem) => {
            if(cardItem.id === action.payload){
                return {...cardItem, amount: cardItem.amount + 1}
            }
            return cardItem
        })
        return {...state, cart: tempCart}
    }
}

export default reducer;