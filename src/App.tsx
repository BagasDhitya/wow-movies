import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from './pages/landing'
import Register from './pages/register'
import Login from './pages/login'
import Home from './pages/home'
import Favorites from './pages/favorites'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App