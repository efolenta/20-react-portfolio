import React from "react";
import { Row } from "../Grid";

function Jumbotron(props) {
    return (
        <div className="jumbotron-fluid">
            <div className="container">
                <Row>
                <div className="col-md-6">
                <h1 className="display-4">{props.title}</h1>
                <p className="lead">Full Stack Web Developer from UC Irvine</p>
                </div>
                <div className="col-md-6" id="jumbotron-image">
                <img src={props.image} alt="computer" id={props.class} />
                </div>
                </Row>
            </div>
        </div>
        
    )
}

export default Jumbotron;