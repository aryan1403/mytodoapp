import React from "react";
import "./item.css";

export const Item = ({ todo, onDelete }) => {
  return (
    <>
      <div className="col">
        <div id="mycard" className="card">
          <div className="card-body">
            <h5 id="title" className="card-title">
              {todo.todo}
            </h5>
            <p id="desc" className="card-text">
              {todo.desc}
            </p>
            <button
              className="btn-sm btn-danger"
              onClick={() => onDelete(todo.index)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
