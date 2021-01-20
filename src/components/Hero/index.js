import React from "react";
import { Row } from "../Grid";

function Hero(props) {
    return (
        <div className="jumbotron-fluid">
            <div className="container">
                <Row>
                    <div className="col-md-6">
                        <h1 className="display-4">{props.title}</h1>
                        <p className="lead">{props.subtext}</p>
                    </div>
                </Row>
            </div>
        </div>
        
    )
}

export default Hero;