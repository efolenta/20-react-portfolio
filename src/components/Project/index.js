import React from "react";

function Project(props) {
    return (
        <>
            <div className="card text-center">
                <div className="card-header" id={props.Code}>
                    {props.header}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.body}</p>
                </div>
                <div className="card-footer" id="github-url">
                    <p><a href={props.url}>View Source</a></p>
                </div>
            </div>
        </>
    )
}

export default Project;