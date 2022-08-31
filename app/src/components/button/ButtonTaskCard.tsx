import * as Icon from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { isClosePopup, isPopupView } from "../../redux/features/globalState";

const ButtonTaskCard = () => {
  const dispatch = useDispatch();
  const clickButtonHandler = () => {
    dispatch(isClosePopup(false));
    dispatch(isPopupView("addTask"));
  };
  return (
    <>
      <div className="card-add-task" onClick={clickButtonHandler}>
        <div className="testAnimate">
          <Icon.PlusCircleDotted color="white" size={25} />
          <div style={{ marginLeft: "1em", color: "white" }}>Add To Do</div>
        </div>
      </div>
    </>
  );
};

export default ButtonTaskCard;
