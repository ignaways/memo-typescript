import "./assets/styles/App.css";
import ButtonTaskCard from "./components/button/ButtonTaskCard";
import { useDispatch, useSelector } from "react-redux";
import { isCardType, isColorMode } from "./redux/features/mode";
import type { RootState } from "./redux/store";

import Homepage from "./pages/Homepage";
import PopupPage from "./pages/PopupPage";

function App() {
  const dispatch = useDispatch();
  const isPopup = useSelector((state: RootState) => state.globalState.closePopup);
  return (
    <div>
      <div>
        <button onClick={() => dispatch(isCardType(false))}>single</button>
        <button onClick={() => dispatch(isCardType(true))}>mutiple</button>
        <button onClick={() => dispatch(isColorMode(false))}>night</button>
        <button onClick={() => dispatch(isColorMode(true))}>day</button>
      </div>
      <div className="container">
        <ButtonTaskCard />
        <Homepage />
        {!isPopup && <PopupPage />}
      </div>
    </div>
  );
}

export default App;
