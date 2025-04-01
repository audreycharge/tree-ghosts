import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import broken from './assets/broken.jpg';

function TreeCard() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={broken} />
        <Card.Body>
          <Card.Title>Magnolia Tree</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="flat" size="xxl">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default TreeCard;
