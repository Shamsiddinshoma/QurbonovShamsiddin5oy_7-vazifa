import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../store'
import { removeItem } from '../features/cart'
import { increase , decrease} from '../features/cart'


export default function Item({id,title,img,price,amount}) {

  const dispatch = useDispatch()
  // const {amount, total, cart} = useSelector((store) => store.cart);

    return (
        <article className='card'>
          <div className='cardtop'>
          <div className="cardimg">
              <img src={img} alt="" />
            </div>
            <div className="cardinfo">
              <h2>{title}</h2>
              <p>{price}</p>
              <button className='removebtn' onClick={() => dispatch(removeItem(id))}>remove</button>
            </div>
            <div className="incDec">
              <button onClick={() =>  dispatch(increase({id}))} className='incbtn'><img src="https://cdn-icons-png.flaticon.com/512/64/64589.png" alt="" /></button>
              {amount}
              <button onClick={() => { 
                if(amount === 1){
                  dispatch(removeItem(id));
                  return;
                }
                dispatch(decrease({id}))}} className='decbtn'><img src="https://cdn-icons-png.flaticon.com/512/2609/2609201.png" alt="" /></button>
            </div>
          </div>
          </article>
  )
}

