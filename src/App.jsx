import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Header cart={cart}/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
