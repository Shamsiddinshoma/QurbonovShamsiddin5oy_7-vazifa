// const reducer = (state,action) => {
//     if (action.type === 'CLEAR_CART') {
//         return {...state, cart: []}
//     }
//     if (action.type === 'REMOVE') {
//         return{
//             ...state,
//             cart: state.cart.filter((cardItem) => cardItem.id !== action.payload)
//         }
//     }
//     if (action.type === 'INC') {
//         let tempCart = state.cart.map((cardItem) => {
//             if(cardItem.id === action.payload){
//                 return {...cardItem, amount: cardItem.amount + 1}
//             }
//             return cardItem
//         })
//         return {...state, cart: tempCart}
//     }
//     if (action.type === 'DEC') {
//         let tempCart = state.cart.map((cardItem) => {
//             if(cardItem.id === action.payload){
//                 return {...cardItem, amount: cardItem.amount - 1}
//             }
//             return cardItem
//         })
//         .filter((cardItem) => cardItem.amount !== 0)
//         return {...state, cart: tempCart}
//     }
//     // if(action.type === 'GET_TOTALS') {
//     //     let {total, amount} = state.cart.reduce(
//     //         (cartTotal, cartItem) => {
//     //             const {price, amount} = cartItem
//     //             const itemTotal = price * amount

//     //             cartTotal.total += itemTotal
//     //             cartTotal.amount += amount
//     //             return cartTotal
//     //         },
//     //         {
//     //             total: 0,
//     //             amount: 0
//     //         }
//     //     )
//     // }
// }

// export default reducer;