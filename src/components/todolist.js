import React, { useState } from "react";
import Todoform from "./Todoform";
import Todo from "./Todo";

export default function Todolist() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newvalue) => {
    if (!newvalue.text || /^\s*$/.test(newvalue.text)) {
      return;
    }
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completetodo = id => {
    let updateTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todos;
    });

    setTodos(updateTodos);
  };

  return (
    <>
      <h1>What's the plan?</h1>
      <Todoform onSubmit={addTodo}></Todoform>
      <Todo
        todos={todos}
        completeTodo={completetodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      ></Todo>
    </>
  );
}
