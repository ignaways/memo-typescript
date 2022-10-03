import "../../assets/styles/Card.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { isClosePopup, isPopupView } from "../../redux/features/globalState";
import { themeColor } from "../../services/constants/colorTheme";
import ButtonIconColorTheme from "../button/ButtonIconColorTheme";
import ButtonIconStatus from "../button/ButtonIconStatus";

import * as Icon from "react-bootstrap-icons";

const MutipleCard = () => {
  const colorTheme = useSelector((state: RootState) => state.mode.colorTheme);
  const mainColor = themeColor.color[0].mainColor;
  const subColor = themeColor.color[0].subColor;

  const dispatch = useDispatch();
  const clickButtonHandler = () => {
    dispatch(isClosePopup(false));
    dispatch(isPopupView("detailTask"));
  };
  return (
    <div
      className="card-task"
      style={{
        backgroundColor: `${mainColor}`,
        color: `${subColor}`,
      }}
    >
      <div>Title</div>
      <div>Description</div>
      <ButtonIconStatus />
      <ButtonIconColorTheme />
    </div>
  );
};

export default MutipleCard;
