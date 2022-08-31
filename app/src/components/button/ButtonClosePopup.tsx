import * as Icon from "react-bootstrap-icons";
import "../../assets/styles/Button.css";
import { useDispatch } from "react-redux";
import { isClosePopup } from "../../redux/features/globalState";

const ButtonClosePopup = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Icon.XCircle size={20} className="button-close" onClick={() => dispatch(isClosePopup(true))} />
    </>
  );
};

export default ButtonClosePopup;
