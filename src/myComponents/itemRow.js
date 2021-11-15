import React from "react";
import { Item } from "./item";

export const ItemRow = ({todos, onDelete}) => {
  return <h1>hi</h1>;

  let rows = [];
  let row = [];


  let a = (<div className="container">
    {
        todos.map((todo) => {
            // row.push(todo);
            if (todo.index % 3 == 0) {
                // rows.push(row);
              return (
                  <>
                  <div className="row">
                    {row}
                  </div>
                  {row = []}
                  </>
              );
            } else {
                row.push(
                    <Item todo={todo} onDelete={() => onDelete(todo.index)} />
                );
            }
          })
      }
  </div>)

      

  
};
