import React from 'react'
import { useGlobalContext } from './context'

export default function Item({id,title,img,price,amount}) {

    const {increment,removeItem,decrement} = useGlobalContext()

  return (
        <div className='card'>
            <div className="cardimg">
              <img src={img} alt="" />
            </div>
            <div className="cardinfo">
              <h2>{title}</h2>
              <p>{price}</p>
              <button onClick={() => removeItem(id)}>remove</button>
            </div>
            <div className="incDec">
              <button onClick={() => increment(id)} className='incbtn'><img src="https://cdn-icons-png.flaticon.com/512/64/64589.png" alt="" /></button>
              {amount}
              <button onClick={() => decrement(id)} className='decbtn'><img src="https://cdn-icons-png.flaticon.com/512/2609/2609201.png" alt="" /></button>
            </div>
          </div>
  )
}

