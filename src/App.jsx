import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Proj from './Proj'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Proj />}>
          <Route path="index" element={<Proj />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App