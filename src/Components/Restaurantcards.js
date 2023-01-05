
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import React from 'react'




function Restaurantcards({restaurant}) {
    console.log(restaurant);
  return (
    <Link style={{textDecoration:"none"}} to={`viewrestaurant/${restaurant.id}`}>
       <Card sm={12} md={6} lg={4} xl={2}>
      <Card.Img variant="top" src={restaurant.photograph} fluid />
      <Card.Body>
        <Card.Title >{restaurant.name} </Card.Title>
        <Card.Text className='text-success'>
         {restaurant.neighborhood}
        </Card.Text>
        <Button variant="light" className='text-dark'>BooK </Button>
      </Card.Body>
    </Card>

    </Link>
  )
}

export default Restaurantcards