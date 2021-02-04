import React from "react";
import Copyright from "../Copyright";
import { Col, Row } from "../Grid";

function Footer() {
    return (
        <>
        <Row>
            <Col size="md-6">
                <h1>Let's Work Together</h1>
            </Col>
            <Col size="md-6">
                <p></p>
                <p><a href="https://github.com/efolenta">See my Github</a></p>
                <p><a href="https://www.linkedin.com/in/eric-folenta/">Connect on LinkedIn</a></p>
            </Col>
        </Row>
        <Row>
            <Copyright />
        </Row>
        </>
    )
}

export default Footer;