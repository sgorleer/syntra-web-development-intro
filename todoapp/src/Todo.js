function Todo({ todo, todos, setTodos, text }) {
  const deleteTodo = () => {
    setTodos(todos.filter((x) => x.id !== todo.id));
  };
  // stel dat je deze functie op de lijst zou zetten, zonder met aparte Todo component, dan kan je de onClick event als volgt doen: onClick={() => deleteTodo(cv.id)}
  const completeTodo = () => {
    setTodos(
      todos.map((x) => {
        if (x.id === todo.id) {
          return { ...x, completed: true };
        }
        return x;
      })
    );
  };
  return (
    <div className="todo">
      <li className={todo.completed ? "completed" : ""} key={text}>
        {text}
      </li>
      <button onClick={completeTodo} className="complete-btn">
        Complete
      </button>
      <button onClick={deleteTodo} className="remove-btn">
        Remove
      </button>
    </div>
  );
}

export default Todo;
