import Todo from "./Todo";

const List = ({ todos, setTodos }) => {
  return (
    <>
      <h1>To do's</h1>
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

export default List;
