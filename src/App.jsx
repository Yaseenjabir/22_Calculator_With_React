import "./App.css";
import Input from "./components/Input";
import Buttons from "./components/Buttons";
import { useReducer } from "react";
import Main from "./components/Main";

const reducer = (state, action) => {
  if (action.type === "CALCULATE" && action.payload.userClick === "C") {
    state = "";
    return state;
  } else if (action.type === "CALCULATE" && action.payload.userClick === "=") {
    let result = eval(state);
    if (result === 0) {
      state = "";
      return state;
    }
    return result;
  } else {
    let DisplayValue = state + action.payload.userClick;
    return DisplayValue;
  }
  return state; //This return statement is for fallback
};

function App() {
  const [output, dispatchOutput] = useReducer(reducer, "");
  const handleClick = (userClick) => {
    dispatchOutput({
      type: "CALCULATE",
      payload: {
        userClick,
      },
    });
  };
  return (
    <>
      <center>
        <Main>
          <Input output={output} />
          <Buttons handleClick={handleClick} />
        </Main>
      </center>
    </>
  );
}

export default App;
