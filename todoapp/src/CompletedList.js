import Todo from "./Todo";
import { useState } from "react";

// in deze component gaan we eerst filteren op truthy values in het object van de to do en dan pas mappen

const CompletedList = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <>
      <h1>Completes</h1>
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo
              todo={todo}
              text={todo.text}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default CompletedList;
