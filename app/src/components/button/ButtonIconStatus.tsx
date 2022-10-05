import * as Icon from "react-bootstrap-icons";
import axios from "axios";

const ButtonIconStatus = ({ status }: { status: boolean }) => {
  const statusApi = async () => {
    const response = await axios.put(`https://my-json-server.typicode.com/ignaways/memo-typescript/db`, {})
  }
  const updateStatushandler = () => {

  }

  return (
    <div style={{ display: "flex" }}>
      {/* <Icon.ClipboardCheckFill />
      <Icon.ExclamationDiamondFill /> */}
      {status ? (
        <>
          <Icon.HourglassSplit size={18} onClick={() => statusApi()} />
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
