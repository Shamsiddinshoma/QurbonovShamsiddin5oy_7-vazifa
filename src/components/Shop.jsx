import React, { useState } from 'react'
import img1 from '../assets/img1.png'
import Proditem from './Proditem'




export default function Shop() {

  const [inc, setInc] = useState(0)
  const increment = (inc) => {
    setInc(inc + 1)
  } 
  return (
    <div className='shop'>
      <Proditem />
    </div>
  )
}
