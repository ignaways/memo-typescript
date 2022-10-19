import * as Icon from "react-bootstrap-icons";
import axios from "axios";
import { BASE_URL } from "../../services/constants/path";
import { isTask } from "../../redux/features/task";
import { useDispatch } from "react-redux";
interface props {
  id: string;
  status: boolean;
}

const ButtonIconStatus = ({ status, id }: props) => {
  const dispatch = useDispatch();
  const statusUpdate = status ? false : true;

  const statusHandlerChange = async (status: boolean) => {
    await axios.patch(`${BASE_URL}/task/${id}/status`, { status });
    const response: any = await axios.get(`${BASE_URL}/task`);
    dispatch(isTask(response.data));
  };

  return (
    <div
      style={{ display: "flex" }}
      onClick={() => {
        statusHandlerChange(statusUpdate);
      }}
    >
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
