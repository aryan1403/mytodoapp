import { React, useState, useEffect } from "react";
import { Item } from "./item";
// eslint-disable-next-line
import { AddTodo } from "./addTodo";

export const ItemList = () => {
  let mytodo;
  if (localStorage.getItem("todos") !== null) {
    mytodo = JSON.parse(localStorage.getItem("todos"));
  } else {
    mytodo = [];
  }

  const [todos, setTodos] = useState(mytodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (index) => {
    console.log(index); // 0

    setTodos(
      todos.filter((t) => {
        return t.index !== index;
      })
    );
  };

  const addTodo = (title, descrip) => {
    let i;
    if (todos.length === 0) {
      i = 0;
    } else {
      i = todos[todos.length - 1].index + 1;
    }
    let meow = {
      index: i,
      todo: title,
      desc: descrip,
    };

    setTodos([...todos, meow]);
  };

  if (todos.length === 0) {
    return (
      <>
        <AddTodo key="mew" addTodo={addTodo} />
        <div className="container">
          <h2>No Todo Present</h2>
        </div>
      </>
    );
  } else {
    return (
      <>
        <AddTodo key="mew" addTodo={addTodo} />
        <div className="container">
          <div className="row">
            {todos.map((todo) => {
              return (
                <>
                  <Item todo={todo} onDelete={() => onDelete(todo.index)} />
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
};
