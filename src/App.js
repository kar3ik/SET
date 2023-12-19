import React from 'react'
import './App.css'
import Login from './login'
import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div className='bg-black text-white'>
      <Routes>
        <Route path='/' element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App