/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router'

function Item ({ item }) {
  return (
    <Col lg={4}>
      <Card style={{ opacity: item.stock < 10 ? 0.5 : 1 }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Card.Text>
            {item.category}
          </Card.Text>
          <Card.Text>
            ${item.price}
          </Card.Text>
          <Button variant="primary" as={Link} to={`/item/${item.id}`}>ver detalle</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Item
