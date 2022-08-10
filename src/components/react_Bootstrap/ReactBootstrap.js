import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function ReactBootstrap() {
  return (
    <Card>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle>Card Subtitle</Card.Subtitle>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            <Button  variant="warning" className='mx-2'>Learn More</Button>
            <Button variant="danger">Contact Us</Button>
        </Card.Body>
       
        <Button>Learn More</Button>
    </Card>
  )
}
