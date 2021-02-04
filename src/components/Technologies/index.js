import React from "react";
import { Col, Row } from "../Grid";
import nodeLogo from "../../assets/Logo-NodeJS.png";
import mongodbLogo from "../../assets/Logo-mongoDB.png";
import mysqlLogo from "../../assets/Logo-MySQL.png";

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
                        <img width="100%" src={nodeLogo} alt="Node JS Logo" />
                    </div>
                </div>
            </Col>
            <Col size="md-3 sm-6 6">
                <div class="card">
                    <div class="card-body">
                        <img width="100%" src={mysqlLogo} alt="Node JS Logo" />
                    </div>
                </div>
            </Col>
            <Col size="md-3 sm-6 6">
                <div class="card">
                    <div class="card-body">
                        <img width="100%" src={mongodbLogo} alt="Node JS Logo" />
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