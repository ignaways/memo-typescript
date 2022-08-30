import * as Icon from "react-bootstrap-icons";
import "../../assets/styles/Button.css";
import { useDispatch } from "react-redux";
import { isClosePopup } from "../../redux/features/globalState";
const PopupCard = () => {
  const dispatch = useDispatch();
  const clickHandler = (e: any) => {
    dispatch(isClosePopup(true));
  };
  return (
    <>
      <div className="card-popup">
        masuk pop up
        <Icon.XSquareFill className="button-close" onClick={clickHandler} />
      </div>
    </>
  );
};

export default PopupCard;
