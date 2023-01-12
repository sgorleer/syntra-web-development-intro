import "./styles.css";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "setGender":
      return { ...state, gender: action.value };
    default:
      return state;
  }
};
const initialState = {
  gender: "",
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "setGender", value: "male" })}>
        Male
      </button>
      <button onClick={() => dispatch({ type: "setGender", value: "female" })}>
        Female
      </button>
      <button
        onClick={() => dispatch({ type: "setGender", value: "nonbinary" })}
      >
        Non-binary
      </button>
      <div>
        Gender: <b>{state.gender}</b>
      </div>
    </div>
  );
}
