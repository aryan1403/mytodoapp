import {React, useState} from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [descrip, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if(!title || !descrip) {
      alert("Title and Description Cannot be Empty");
    } else {
      props.addTodo(title, descrip);
    }
  }

  return (
    <>
      <div className="container my-3">
      <h2 className="mb-3 text-center">Add a Todo</h2>
      <form onSubmit={submit}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Todo Title
        </label>
        <input
          type="title"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter the Todo Title"
          value={title}
          onChange={(text) => setTitle(text.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Todo Description
        </label>
        <input
          type="title"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter the Todo Description"
          value={descrip}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <button className="btn btn-success">
        Add Todo
      </button>
      </form>
      </div>
    </>
  );
};
