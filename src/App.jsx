import './App.css'
import { useState } from 'react'
import Rings from './Components/Rings/Rings'
import RingHeader from './Components/RingHeader/RingHeader'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product]) 
  }

  return (
    <>
      <RingHeader cartCount={cart.length} />
      <Rings addToCart={addToCart} />
    </>
  )
}

export default App
