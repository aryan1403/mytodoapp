import React from "react";
import "./item.css";

export const Item = (props) => {
  return (
    <>
      <div className="card">
        <img id="todoimg" src={props.img} className="card-img-top"/>
        <div className="card-body">
          <h5 className="card-title">{props.todo}</h5>
          <p className="card-text">
            {props.desc}
          </p>
          <a href="/" className="btn btn-primary">
            Completed
          </a>
        </div>
      </div>
    </>
  );
};
