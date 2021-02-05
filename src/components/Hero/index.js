import React from "react";
import { Row } from "../Grid";

function Hero(props) {
    return (
        <div className="jumbotron-fluid">
            <div className="container" style={{paddingTop: 100, paddingBottom: 100}}>
                <Row>
                    <div className="col-md-12" align="center">
                        <h1 className="display-3">{props.title}</h1>
                        <p className="lead">{props.subtext}</p>
                    </div>
                </Row>
            </div>
        </div>
        
    )
}

export default Hero;