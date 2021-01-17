import React from "react";
import { Col, Container, Row } from "../Grid";

function Technologies () {
    return (
        <>
        <div align="center">
            <h1 align="center">Technologies</h1>
            <hr />
        </div>
        <Row>
            <Col size="md-2 xs-3">
                <p>HTML</p>
            </Col>
            <Col size="md-2 xs-3">
                <p>CSS</p>
            </Col>
            <Col size="md-2 xs-3">
                <p>CSS</p>
            </Col>
            <Col size="md-2 xs-3">
                <p>Node.js</p>
            </Col>
            <Col size="md-2 xs-3">
                <p>MySQL</p>
            </Col>
            <Col size="md-2 xs-3">
                <p>MongoDB</p>
            </Col>
        </Row>
        <Row>
            <Col size="md-2 xs-4">
                <p>React</p>
            </Col>
        </Row>
        </>
    )
}

export default Technologies;