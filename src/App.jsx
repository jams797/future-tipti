import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Router, Link } from '@reach/router';
import { Proj } from './Proj'
import { Card } from './Card'
import { IndexPage } from './IndexPage';
import { Paid } from './Paid';

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Proj />}>
    //       <Route path="index" element={<Proj />} />
    //       <Route path="card" element={<Tmp />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <Router>
      <Routes>
        <Route path="/" exact element={<IndexPage />} />
        <Route path="product" element={<Proj />} />
        <Route path="card" element={<Card />} />
        <Route path="paid" element={<Paid />} />
      </Routes>
    </Router>
  )
}

export default App