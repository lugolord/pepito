import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'
import { Link } from 'react-router'

function NavBar () {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand to="/" as={Link}>Hiper Tiendita</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link to="/category/cellphone" as={Link}>cellphone</Nav.Link>
          <Nav.Link to="/category/laptops" as={Link}>laptops</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar
