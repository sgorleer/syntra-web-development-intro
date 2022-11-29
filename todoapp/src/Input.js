import { useState } from "react";

const Input = ({ todos, setTodos }) => {
  const [input, setInput] = useState("");

  function submitClicked(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: input, id: Math.random() * 100, completed: false },
    ]);
    setInput("");
  }

  // we maken hier een controlled input van => we geven value mee aan ons inputveld
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></input>
      <button onClick={submitClicked}>Add TO DO</button>
    </>
  );
};

export default Input;
