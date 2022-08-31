import ButtonClosePopup from "../button/ButtonClosePopup";
import AddTaskForm from "../content/AddTaskForm";
import DetailTask from "../content/DetailTask";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const PopupCard = () => {
  const popupView = useSelector(
    (state: RootState) => state.globalState.popupView
  );
  return (
    <>
      <div className="card-popup">
        <div>
          <div>Title To Do</div>
          <ButtonClosePopup />
        </div>
        {popupView === "addTask" ? <AddTaskForm /> : <DetailTask />}
      </div>
    </>
  );
};

export default PopupCard;
