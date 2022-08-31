import PopupCard from "../components/card/PopupCard";
import "../assets/styles/Modal.css";
import { useDispatch } from "react-redux";
import { isClosePopup } from "../redux/features/globalState";
const PopupPage = () => {
  const dispatch = useDispatch();
  const clickHandler = (e: any) => {
    if (e.target.className === "modal") {
      dispatch(isClosePopup(true));
    }
  };

  return (
    <>
      <div className="modal" onClick={clickHandler}>
        <PopupCard />
      </div>
    </>
  );
};

export default PopupPage;
