import { useState } from "react";
import Input from "./Input";
import List from "./List";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Input todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}
