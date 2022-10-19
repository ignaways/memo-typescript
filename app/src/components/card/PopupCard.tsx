import ButtonClosePopup from "../button/ButtonClosePopup";
import AddTaskForm from "../mapping/TaskList";
import DetailTask from "../mapping/DetailTask";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const PopupCard = () => {
  const popupView = useSelector(
    (state: RootState) => state.globalState.popupView
  );
  console.log("🚀 ~ file: PopupCard.tsx ~ line 11 ~ PopupCard ~ popupView", popupView)
  return (
    <>
      <div className="card-popup">
        <div>
          <div>Title To Do</div>
          <ButtonClosePopup />
        </div>
        {/* {popupView === "addTask" ? <AddTaskForm /> : <DetailTask />} */}
      </div>
    </>
  );
};

export default PopupCard;
