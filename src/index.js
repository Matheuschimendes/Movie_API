import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './global.css'
import Home from './pages/Home'
import Details from './pages/Details'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/details/:id" element={<Details/>}/>

    </Routes>
  </BrowserRouter>
);

