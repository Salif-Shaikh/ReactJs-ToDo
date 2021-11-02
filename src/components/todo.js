import React, { useState } from "react";
import Todoform from "./Todoform";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimesCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons"

export default function Todo({ todos, completeTodo, removeTodo, UpdateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = value => {
    UpdateTodo(edit.id, value);
    setEdit({
      id: null,
      value: " ",
    });
  };

  if (edit.id) {
    return <Todoform edit={edit} onsubmit={submitUpdate}></Todoform>;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <FontAwesomeIcon
          icon={faTimesCircle}
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <FontAwesomeIcon
        icon={faPlusCircle}
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}
