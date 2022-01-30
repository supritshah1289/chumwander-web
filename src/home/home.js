import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Home = () => (
  <div className="h-100 p-5 bg-dark rounded-3">
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="info">
          <Link to="/about"> Info </Link>
        </Button>
      </Card.Body>
    </Card>
  </div>
);

export default Home;
