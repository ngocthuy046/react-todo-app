import '../style.css'
import React from 'react'
import Register  from '../pages/Register'
import { Login } from '../pages/Login'
const App= () => {
  let isAuth = true 
  return (
    <div>
        {isAuth ? <Login /> : <Register />}
    </div>
  )
}

export default App