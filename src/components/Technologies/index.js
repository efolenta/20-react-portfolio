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
                        <i class="fab fa-html5"></i>
                    </div>
                </div>
            </Col>
            <Col size="md-3 sm-6 6">
                <div class="card">
                    <div class="card-body">
                        <i class="fab fa-css3"></i>
                    </div>
                </div>
            </Col>
            <Col size="md-3 sm-6 6">
                <div class="card">
                    <div class="card-body">
                        <i class="fab fa-js"></i>
                    </div>
                </div>
            </Col>
            <Col size="md-3 sm-6 6">
                <div class="card">
                    <div class="card-body">
                        <i class="fab fa-node"></i>
                    </div>
                </div>
            </Col>
            <Col size="md-3 sm-6 6">
                <div class="card">
                    <div class="card-body">
                    <i class="fas fa-database"></i>
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
                        <i class="fab fa-react"></i>
                    </div>
                </div>
            </Col>
        </Row>
        </>
    )
}

export default Technologies;