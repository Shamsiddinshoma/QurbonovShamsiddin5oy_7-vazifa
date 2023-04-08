import React from 'react'
import Card from './Card'
import { useGlobalContext } from './context'

export default function Proditem() {
const {cart,clearCart} = useGlobalContext()

  return (
    <div className='pIteam'>
      <h2 className='yb'>YOUR BAG</h2>
      {cart.map((prod) => {
        return(
          <Card key={prod.id} {...prod}/>
        )
      })}
      <button className='clearbtn' onClick={() => clearCart()}>CLEAR CART</button>
    </div>
  )
}
