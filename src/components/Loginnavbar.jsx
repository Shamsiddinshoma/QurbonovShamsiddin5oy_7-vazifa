import React from 'react'
import { Navigate, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

export default function Loginnavbar() {
  return (
    <div className='nav'>
    <div className="korzinka">
      <h2>UseReducer</h2>
    </div>
    <div className='loginBtn'>
        <button className='lBtn'>
          <Link to='/login'>
          Login
          </Link>
        </button>
    </div>
  </div>
  )
}
