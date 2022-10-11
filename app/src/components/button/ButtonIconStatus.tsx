import * as Icon from "react-bootstrap-icons";
import axios from "axios";

interface props {
  id: string,
  status: boolean,
}

const ButtonIconStatus = ({ status, id }: props) => {

  return (
    <div style={{ display: "flex" }}>
      {/* <Icon.ClipboardCheckFill />
      <Icon.ExclamationDiamondFill /> */}
      {status ? (
        <>
          <Icon.HourglassSplit size={18} />
          <div style={{ fontSize: ".8em", marginLeft: ".3em" }}>Progress</div>
        </>
      ) : (
        <>
          <Icon.ClipboardCheckFill size={18} />
          <div style={{ fontSize: ".8em", marginLeft: ".3em" }}>Done</div>
        </>
      )}
    </div>
  );
};

export default ButtonIconStatus;
