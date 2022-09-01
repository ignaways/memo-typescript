import * as Icon from "react-bootstrap-icons"
import { useDispatch, useSelector } from "react-redux";
import { isColorMode } from "../../../redux/features/mode";
import type { RootState } from "../../../redux/store";

const IconToggleMode = () => {
  const dispatch = useDispatch();
  const colorMode = useSelector((state:RootState) => state.mode.colorMode)
  return (
  <>
    {
      colorMode ? 
      <Icon.ToggleOff size={22} onClick={() => dispatch(isColorMode(false))} /> :
      <Icon.ToggleOn size={22} onClick={() => dispatch(isColorMode(true))} /> 
    }
  </>
  );
};

export default IconToggleMode;
