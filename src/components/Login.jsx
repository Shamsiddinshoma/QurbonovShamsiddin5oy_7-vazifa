import React, { useState } from 'react'
import { useNavigate } from 'react-router';


export default function Login({setUser}) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email) return;
    setUser({name: name, email: email});
    navigate('/proditem')
  }
  return (
    <section className='section'>
      <form className='form' onSubmit={handleSubmit}>
        <h5 className='h5'>Login</h5>
        <div className='boxinput'>
          <label htmlFor="name">
            Name
          </label>
          <input 
          placeholder='enter your name'
           type="text"
           className='form-input'
           id='name' 
           value={name}
           onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">
            Email
          </label>
          <input 
          placeholder='enter your email'
           type="text"
           className='form-input'
           id='email' 
           value={email}
           onChange={(e) => setEmail(e.target.value)}
          />
          
        </div>
        <button type='submit' className='loginbtn'>
          login
        </button>
      </form>
    </section>
  )
}
