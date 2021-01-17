import React from "react";
import { Col, Row } from "../Grid";

function Technologies () {
    return (
        <>
        <div align="center">
            <h1 align="center">Technologies</h1>
            <hr />
        </div>
        <Row>
            <Col size="md-3 sm-6 6">
                <div class="card">
                    <div class="card-body">
                        HTML
                    </div>
                </div>
            </Col>
            <Col size="md-3 sm-6 6">
                <div class="card">
                    <div class="card-body">
                        CSS
                    </div>
                </div>
            </Col>
            <Col size="md-3 sm-6 6">
                <div class="card">
                    <div class="card-body">
                        JavaScript
                    </div>
                </div>
            </Col>
            <Col size="md-3 sm-6 6">
                <div class="card">
                    <div class="card-body">
                        Node.js
                    </div>
                </div>
            </Col>
            <Col size="md-3 sm-6 6">
                <div class="card">
                    <div class="card-body">
                        MySQL
                    </div>
                </div>
            </Col>
            <Col size="md-3 sm-6 6">
                <div class="card">
                    <div class="card-body">
                        MongoDB
                    </div>
                </div>
            </Col>
            <Col size="md-3 sm-6 6">
                <div class="card">
                    <div class="card-body">
                        React
                    </div>
                </div>
            </Col>
        </Row>
        </>
    )
}

export default Technologies;