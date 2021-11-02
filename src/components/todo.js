import react, { useState } from "react";
import Todoform from "./Todoform";
import { RicloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

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
        <RicloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}
