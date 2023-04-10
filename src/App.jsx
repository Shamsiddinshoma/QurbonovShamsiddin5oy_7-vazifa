import { useState,useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { totalYigish } from './features/cart'
import Proditem from './components/Proditem'
import { store } from './store'


function App() {

  const {cart} = useSelector((store) => store.cart)
  const dispatch = useDispatch()


  useEffect(() => {
dispatch(totalYigish())
  }, [cart])

  return (
    <div className='continer'>
      <Navbar />
      <Proditem />
    </div>
  )
}

export default App
