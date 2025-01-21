/* eslint-disable react/prop-types */
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'

function ItemCount ({ item }) {
  const [count, setCount] = useState(0)
  const { addToCart } = useContext(CartContext)

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleSubstract = () => {
    setCount(count - 1)
  }

  const handleAddToCart = () => {
    addToCart({...item, quantity: count})
  }

  return (
    <div>
      <p style={{ border: 'solid 1px white'}}>{count}</p>
      <button style={{ backgroundColor: 'red' }} onClick={handleSubstract}>restar</button>
      <button style={{ backgroundColor: 'green' }} onClick={handleAdd}>sumar</button>
      <button onClick={handleAddToCart}>add to cart</button>
    </div>
  )
}

export default ItemCount
