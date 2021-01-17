import React from "react";
import { Col } from "../Grid";

function Footer() {
    return (
        <>
        <Col size="md-8">
            <h1>Eric Folenta Portfilo</h1>
            <p><a href="https://github.com/efolenta">View Github</a></p>
            <p><a href="https://www.linkedin.com/in/eric-folenta/">View LinkedIn</a></p>
        </Col>
        <Col size="md-4">
            <p align="right">Copyright 2021</p>
        </Col>
        </>
    )
}

export default Footer;