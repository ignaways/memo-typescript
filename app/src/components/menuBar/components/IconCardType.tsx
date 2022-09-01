import * as Icon from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { isCardType } from "../../../redux/features/mode";
import type { RootState } from "../../../redux/store";

const IconCardType = () => {
  const dispatch = useDispatch();
  const cardType = useSelector((state:RootState) => state.mode.cardType)
  return (
    <>
      {
        cardType ? 
          <Icon.GridFill style={{"cursor":"pointer"}} size={20} onClick={() => dispatch(isCardType(false))} /> :
          <Icon.HddStackFill style={{"cursor":"pointer"}} size={20} onClick={() => dispatch(isCardType(true))} />   
      }
    </>
  );
};

export default IconCardType;
