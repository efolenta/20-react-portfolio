import React from "react";
import { Col, Container, Row } from "../components/Grid";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import Project from "../components/Project";
import ShapeDivider from "../components/ShapeDivider";
import Footer from "../components/Footer";
import Profile from "../assets/github-profile.jpg";
import Technologies from "../components/Technologies";
// import Copyright from "../components/Copyright";

function HomePage() {
  
  // This function changes the page title.
  function componentDidMount() {
    document.title = 'Eric Folenta | Web Developer';
  }
  // Run the function to change the page title.
  componentDidMount();

  return(
    <>
      <Header />
      <Jumbotron title="Hey, I'm Eric." subtext="Full Stack Web Developer based In Rochester, NY. I enjoy creating websites to help businesses do better online." image={Profile} class="profile" buttonText="View Full Portfolio"/>
      <ShapeDivider />
      <Container id="technologies">
           <Technologies />
      </Container>
      <Container fluid id="projects-container">
        <Row>
          <Col size="md-12">
            <h1 align="center">My Select Works</h1>
            <hr />
          </Col>
          <Col size="md-4">
            <Project 
              Code="html"
              header="HTML"
              title="Code Refactor"
              body="Clean code is the most important! Ready to publish this code has proper indentation and images have alt-text for the visually impaired."
              url="https://github.com/efolenta/01-Homework" />
          </Col>
          <Col size="md-4 sm-6">
            <Project
              Code="javascript"
              header="JavaScript"
              title="Weather Dashboard"
              body="HTML and JavaScript bring this application to life. Search major cities for instant weather updates and a 5 day forecast. Uses the OpenWeather API."
              url="https://github.com/efolenta/06-weather-dashboard"/>
          </Col>
          <Col size="md-4 sm-6">
            <Project
              Code="node"
              header="Node"
              title="Employee Management System"
              body="Built using Node.js, this CLI application allows a user to track employees in their company. Supported methods are adding, updating and removing employees, roles and departments."
              url="https://github.com/efolenta/12-employee-tracker"/>
          </Col>
        </Row>
        <Row>
          <Col size="md-4">
            <Project
              Code="javascript"
              header="JavaScript"
              title="Note Taker"
              body="Taking notes is important. This javascript based note taker application allows the user to create and save notes in the local storage."
              url="https://github.com/efolenta/11-note-taker"/>
          </Col>
          <Col size="md-4 sm-6">
            <Project
              Code="node"
              header="Node"
              title="User Directory"
              body="Built on the React platform this user directory runs off a json file. Sortable too by each column."
              url="https://github.com/efolenta/19-user-directory"/>
          </Col>
          <Col size="md-4 sm-6">
            <Project
              Code="html"
              header="HTML"
              title="Simple Portfolio"
              body="HTML and CSS are dominant in this example. Bootstrap was selected for the layout. Simple design and effective."
              url="https://github.com/efolenta/02-responsive-portfolio"/>
          </Col>
        </Row>
      </Container>
      <Container fluid id="footer">
        <Footer />
      </Container>
    </>
  );
}

export default HomePage;