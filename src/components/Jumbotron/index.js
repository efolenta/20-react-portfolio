import React from "react";
import { Row } from "../Grid";

function Jumbotron(props) {
    return (
        <div className="jumbotron-fluid">
            <div className="container">
                <Row>
                    <div className="col-md-6">
                        <h1 className="display-3">{props.title}</h1>
                        <p className="lead">{props.subtext}</p>
                        <button type="button" class="btn btn-primary">{props.buttonText}</button>
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