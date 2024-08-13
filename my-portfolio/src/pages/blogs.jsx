import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Blogs() {
  return (
    <Container className="mt-5">
      <h2>Blogs</h2>
      <Row>
        <Col md={4} className="my-3">
          <Card>
            <Card.Body>
              <Card.Title>Blog Post 1</Card.Title>
              <Card.Text>Summary of Blog Post 1.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="my-3">
          <Card>
            <Card.Body>
              <Card.Title>Blog Post 2</Card.Title>
              <Card.Text>Summary of Blog Post 2.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="my-3">
          <Card>
            <Card.Body>
              <Card.Title>Blog Post 3</Card.Title>
              <Card.Text>Summary of Blog Post 3.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
