import React from 'react'
import { useGlobalContext } from './context'
import korzinka from '../assets/korzinka.png'


export default function Navbar() {
  const {amount} = useGlobalContext()
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
