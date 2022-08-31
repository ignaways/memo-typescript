import "../../assets/styles/Card.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { isClosePopup, isPopupView } from "../../redux/features/globalState";


import * as Icon from "react-bootstrap-icons";

const MutipleCard = () => {
  const dispatch = useDispatch();
  const colorMode = useSelector((state: RootState) => state.mode.colorMode);
  const clickButtonHandler = () => {
    dispatch(isClosePopup(false));
    dispatch(isPopupView("detailTask"));
  };
  return (
    <div
      className={`${
        colorMode ? "card-task__day-mode" : "card-task__night-mode"
      }`}
      onClick={clickButtonHandler}
    >
        <Icon.GridFill />
        <Icon.HddStackFill/>
      <div>Title</div>
      <div>Description</div>
      
      <Icon.ClipboardCheckFill />
      <Icon.ExclamationDiamondFill />
      <Icon.HourglassSplit />
      <div>icon</div>
    </div>
  );
};

export default MutipleCard;
