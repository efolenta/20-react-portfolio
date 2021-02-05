import React from "react";
import { Col, Row } from "../Grid";

function Work() {
    return (
        <>
        <Row>
            <Col size="12">
                <div align="center">
                    <h1 align="center">Who I've Worked With...</h1>
                    <hr />
                </div>
            </Col>
        </Row>
        <Row>
            <Col size="md-6">
                <div align="center">
                    <p>Yamaha Corporation of America</p>
                    <p>The Hollywood Show</p>
                    <p>Grand Piano Haus</p>
                    <p>O'Neill's Music House</p>
                    <p>Ronny Schiff Productions</p>
                </div>
            </Col>
            <Col size="md-6">
                <div align="center">
                    <p>Fresno Piano Gallery</p>
                    <p>Banding Together</p>
                    <p>Revolution Music School</p>
                    <p>OC Record Show</p>
                    <p>Keys to my Castle</p>
                </div>
            </Col>
        </Row>
        </>
    )
}

export default Work;