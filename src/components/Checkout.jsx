import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useCart } from '../context/CartContext'
import { createOrder } from '../firebase/db'
import { serverTimestamp } from 'firebase/firestore'

function Checkout () {
  const { cart, getTotal } = useCart()

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    const [name, email, phone] = form

    const order = {
      buyer: {name: name.value, email: email.value,phone: phone.value},
      items: cart,
      date: serverTimestamp(),
      total: getTotal()
    }

    createOrder(order)
  }

  return (
    <div className='d-flex align-items-center justify-content-center'>
      <Form className='w-25 mt-5' onSubmit={handleSubmit}>
        <h3 className='mb-5'>Necesitamos estos datos para finalizar tu compra:</h3>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Pepito Perez" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="pepito@gmail.com" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="+5491123434545" required />
        </Form.Group>

        <Button variant="dark" type="submit">
          finalizar compra 🎉
        </Button>
      </Form>
    </div>
  )
}

export default Checkout
