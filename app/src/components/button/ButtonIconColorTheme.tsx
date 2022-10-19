import "../../assets/styles/App.css";
import "../../assets/styles/Icon.css";
import "../../assets/styles/ColorTheme.css";
import axios from "axios";
import * as Icon from "react-bootstrap-icons";
import { themeColor } from "../../services/constants/colorTheme";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../services/constants/path";
import { isTask } from "../../redux/features/task";
// import { Data } from "../../services/interface/TaskState";
import { RootState } from "../../redux/store";
import { useState, useEffect } from "react";
type num = number | undefined;
// type num2 = any | undefined;

const ButtonIconColorTheme = ({ color, id }: { color: string; id: string }) => {
  const dispatch = useDispatch();
  // const [changeColor, setChangeColor] = useState()
  const [index, setIndex] = useState<num>()
  const [data, setData] = useState([])
  const datas: any = useSelector((state: RootState) => state.task.data);


  // console.log("🚀 ~ >>>", datas);

  const newColorHandler = () => {

    // const newColor = datas.splice(index ?? 0, 1, data)
    // console.log("🚀 ~ file: ButtonIconColorTheme.tsx ~ line 29 ~ newColorHandler ~ newColor", newColor)
    // dispatch(isTask(newColor));
    // console.log("handler", newColor)
  }

  const colorHandlerChange = async (color: string) => {
    datas.filter((e: any, i: number) => {
      if (e._id === id) {
        const newColor = datas.splice(i ?? 0, 1, { ...e, color })
        console.log("🚀 ~ file: ButtonIconColorTheme.tsx ~ line 38 ~ datas.filter ~ newColor", newColor)
        // setIndex(i)
        // setData({ ...e, color })
      }
    });
    await axios.patch(`${BASE_URL}/task/${id}/color`, { color });
    const response: any = await axios.get(`${BASE_URL}/task`);
    // dispatch(isTask(response.data));
  };


  
  useEffect(() => {
    // newColorHandler()
    console.log('result>>',data);
    console.log('result idx>>',index);
    // setData(datas)
  },[data])

  return (
    <>
      <div className="dropdown" style={{ marginLeft: ".7em" }}>
        <div style={{ display: "flex" }}>
          <Icon.PaletteFill size={18} />
          <div style={{ fontSize: ".8em", marginLeft: ".5em" }}>{color}</div>
        </div>
        <div className={`dropdown-content ${color}_revese card-color`}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {themeColor.color.map((e, i) => {
              return (
                <Icon.PaletteFill
                  key={i}
                  color={e.mainColor}
                  className="icon-color-palette"
                  type="button"
                  onClick={() => colorHandlerChange(e.color)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonIconColorTheme;
