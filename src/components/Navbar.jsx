import React from 'react'
import korzinka from '../assets/korzinka.png'
import { useSelector } from 'react-redux'
import { store } from '../store'

export default function Navbar() {
  const {amount} = useSelector((store) => store.cart)
  return (
    <div className='nav'>
      <div className="korzinka">
        <h2>UseReducer</h2>
        <img className='korzinkaimg' src={korzinka} alt="" />
        <div className="inc">
          {amount}
        </div>
      </div>
    </div>
  )
}
