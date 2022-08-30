import "./assets/styles/App.css";
import Homepage from "./pages/Homepage";
import AddTaskCard from "./components/card/AddTaskCard"
import { useDispatch } from "react-redux";
import { isCardType, isColorMode } from "./redux/features/mode";

function App() {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button onClick={() => dispatch(isCardType(false))}>single</button>
        <button onClick={() => dispatch(isCardType(true))}>mutiple</button>
        <button onClick={() => dispatch(isColorMode(false))}>night</button>
        <button onClick={() => dispatch(isColorMode(true))}>day</button>
      </div>
      <div className="container">
          <AddTaskCard />
          <Homepage />
      </div>
    </div>
  );
}

export default App;
