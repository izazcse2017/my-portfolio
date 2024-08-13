import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={4} className="text-center">
          <Image src={"./my_image.jpg"} fluid />
        </Col>
        <Col md={8}>
          <h2>About Me</h2>
          <p>
            Hi, I'm [Your Name], a [Your Profession]. I specialize in [Your
            Specialization]. I'm passionate about [Your Passion].
          </p>
          <h3>Skills</h3>
          <Row>
            <Col xs={6} md={3} className="text-center my-3">
              <FontAwesomeIcon icon={faHtml5} size="3x" />
              <p>HTML5</p>
            </Col>
            <Col xs={6} md={3} className="text-center my-3">
              <FontAwesomeIcon icon={faCss3Alt} size="3x" />
              <p>CSS3</p>
            </Col>
            <Col xs={6} md={3} className="text-center my-3">
              <FontAwesomeIcon icon={faJsSquare} size="3x" />
              <p>JavaScript</p>
            </Col>
            <Col xs={6} md={3} className="text-center my-3">
              <FontAwesomeIcon icon={faReact} size="3x" />
              <p>React</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
