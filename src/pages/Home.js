import React from "react";
import { Col, Container, Row } from "../components/Grid";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import Project from "../components/Project";
import ShapeDivider from "../components/ShapeDivider";

function HomePage() {
  return(
    <>
      <Header />
      <Jumbotron />
      <ShapeDivider />
      <Container>
        <Row>
          <Col size="md-4">
            <Project Code="html" header="HTML" title="Code Refactor" footer="View Source"/>
          </Col>
          <Col size="md-4">
            <Project Code="javascript" header="JavaScript" title="Weather Dashboard" footer="View Source"/>
          </Col>
          <Col size="md-4">
            <Project Code="node" header="Node" title="Employee Management System" footer="View Source"/>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <Project Code="html" header="HTML" title="Code Refactor" footer="View Source"/>
          </Col>
          <Col size="md-4">
            <Project Code="javascript" header="JavaScript" title="Weather Dashboard" footer="View Source"/>
          </Col>
          <Col size="md-4">
            <Project Code="node" header="Node" title="Employee Management System" footer="View Source"/>
          </Col>
        </Row>
      </Container>
      

    </>
  );
}

export default HomePage;