import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function Contact() {
  return (
    <Container className="mt-5">
      <h2>Contact Me</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>[Your Name]</Card.Title>
              <Card.Text>
                <strong>Email:</strong> [your.email@example.com]
              </Card.Text>
              <Card.Text>
                <strong>Phone:</strong> [Your Phone Number]
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
