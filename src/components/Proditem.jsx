import React, { useEffect } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, totalYigish} from '../features/cart';


export default function Proditem() {

  const {cart,total} = useSelector((store) => store.cart)
  const dispatch = useDispatch()


useEffect(() => {
  dispatch(totalYigish());
}, [cart]);

  return (
    <div className='pIteam'>
      <h2 className='yb'>YOUR BAG</h2>
      <div>
      {cart.map((prod) => {
        return(
          <Card key={prod.id} {...prod}/>
        )
      })}
      </div>
      <footer>
        <hr />
      <div className='total'>
        <div className="tleft">
          <h2>TOTAL</h2>
        </div>
        <div className="trigth">
          <h2>{total}</h2>
        </div>
      </div>
      <button className='clearbtn' onClick={() => dispatch(clearCart())}>CLEAR CART</button>
      </footer>
    </div>
  )
}
