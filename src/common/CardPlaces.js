import React from "react";
import PropType from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardPlaces = (places) => (
  <>
    {places.map((place) => {
      return (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={place.picture} />
          <Card.Body>
            <Card.Title>{place.title}</Card.Title>
            <Card.Text>{place.description}</Card.Text>
            <Button variant="info">
              <Link to="/place"> Info </Link>
            </Button>
          </Card.Body>
        </Card>
      );
    })}
  </>
);

export default CardPlaces;
