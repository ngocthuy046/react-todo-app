import '../styles/App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminPanel from '../pages/AdminPanel'
import Register  from '../pages/Register'
import Login from '../pages/Login'

const App= () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/pages/AdminPanel" element={<AdminPanel />} />
                <Route path="/pages/Register" element={<Register />} />
                <Route path="/pages/Login" element={<Login />} />
            </Routes> 
        </Router>
    </div>
  )
}

export default App