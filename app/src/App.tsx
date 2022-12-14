import "./assets/styles/App.css";
import ButtonTaskCard from "./components/button/ButtonTaskCard";
import { useDispatch, useSelector } from "react-redux";
import { isCardType, isColorMode } from "./redux/features/mode";
import type { RootState } from "./redux/store";

import Homepage from "./pages/Homepage";
import PopupPage from "./pages/PopupPage";
import MenuBar from "./components/menuBar/MenuBar";

function App() {
  const dispatch = useDispatch();
  const isPopup = useSelector((state: RootState) => state.globalState.closePopup);
  // console.log("🚀 ~ file: App.tsx ~ line 14 ~ App ~ isPopup", isPopup)
  return (
    <div>
      <div>
        <button onClick={() => dispatch(isCardType(false))}>single</button>
        <button onClick={() => dispatch(isCardType(true))}>multiple</button>
        <button onClick={() => dispatch(isColorMode(false))}>night</button>
        <button onClick={() => dispatch(isColorMode(true))}>day</button>
      </div>
      <div className="container__main">
        {!isPopup && <PopupPage />}
        {/* <PopupPage /> */}
        <ButtonTaskCard />
        <MenuBar />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
