import './App.css'
import Proditem from './components/Proditem'
import Loginnavbar from './components/Loginnavbar'
import Login from './components/Login'
import { Route, Routes } from 'react-router'
import ProtectedRoutes from './ProtectedRoutes'
import { useState } from 'react'
import Error from './components/Error'

function App() {

  const [user, setUser] = useState(null)

  return (
    <div className='continer'>
      
      <Routes>
        <Route path='/' element={<Loginnavbar />}/>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/proditem' element={
          <ProtectedRoutes user={user}>
            <Proditem user={user} />
          </ProtectedRoutes>
        }
        />
        <Route path='/*' element={<Error />}/>
      </Routes>
      
    </div>
  )
}

export default App
