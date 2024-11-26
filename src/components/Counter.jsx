import { useState } from 'react'

function Counter () {
  // const [state, setter fn] = useState(initialValue)
  const [count, setCount] = useState(0)

  const handleAdd = () => {
    setCount(count + 1)
  }

  const handleSubstract = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <p style={{ border: 'solid 1px white'}}>{count}</p>
      <button style={{ backgroundColor: 'red' }} onClick={handleSubstract}>restar</button>
      <button style={{ backgroundColor: 'green' }} onClick={handleAdd}>sumar</button>
    </div>
  )
}

export default Counter
