import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Projects() {
  return (
    <Container className="mt-5">
      <h2>Projects</h2>
      <Row>
        <Col md={4} className="my-3">
          <Card>
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>Description of Project 1.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="my-3">
          <Card>
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>Description of Project 2.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="my-3">
          <Card>
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>Description of Project 3.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
