import React from 'react';
//import Image
import Image from '../../images/projectPulseImg.png';
//import container,row,col
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <Row>
        {/* icon */}
        <Col xs={3} className="text-center">
          <img
            src={Image}
            alt="Project Pulse"
            className="img-thumbnail mx-auto d-block"
            style={{width: "100%", float: "left", marginRight: "20px"}}
          />
        </Col>

        <Col xs={9}>
          <h2 className="mt-4">Welcome to my Application</h2>
          <p className="lead">
            This product will serve as a tracking tool for projects and portfolio for each GDO and overall organization.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
//export
export default Home;



