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
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer">
                    {props.footer}
                </div>
            </div>
        </>
    )
}

export default Project;