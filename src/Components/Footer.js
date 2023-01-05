import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React from 'react'


function Footer() {
  return (
    <div> <Card className="text-center">
    <Card.Header>Featured</Card.Header>
    <Card.Body>
      <Card.Title>ABOUT US</Card.Title>
      <Card.Text>
        Here is the delicious Foods and Spicy fried meets And Drinks that we making for You. Now we Started new Outlet  in Kochi. Nearly Our Branches Are opening At Calicut And Thalasserry.
        You Are The heros of ours.
      </Card.Text>
      <Button variant="success" className='text-primary'>Location</Button>
    </Card.Body>
    <Card.Footer className="text-light">Thank You</Card.Footer>
  </Card></div>
  )
}

export default Footer