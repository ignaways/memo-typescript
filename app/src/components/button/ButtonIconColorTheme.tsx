import "../../assets/styles/App.css";
import "../../assets/styles/Icon.css";
import * as Icon from "react-bootstrap-icons";
import { themeColor, Color } from "../../services/constants/colorTheme";
import { useDispatch } from "react-redux";
import { isColorTheme } from "../../redux/features/mode";
import { BASE_URL } from "../../services/constants/path";
import axios from "axios";
import useFetch from "../../hooks/useFecth";
// import {dummyMemo} from "../../services/constants/dataDummy"

const ButtonIconColorTheme = ({ color, id }: { color: string, id: string}) => {
  const dispatch = useDispatch();

  const colorHandlerChange = (color: string) => {
    // const response = await axios.patch(`${BASE_URL}/task/:id`)
    console.log(color);
  };
  return (
    <>
      <div className="dropdown" style={{"marginLeft":".7em"}}>
        <div style={{ display: "flex" }}>
          <Icon.PaletteFill size={18} />
          <div style={{ fontSize: ".8em", marginLeft: ".5em" }}>{color}</div>
        </div>
        <div
          className="dropdown-content"
          style={{ backgroundColor: "rgb(184, 104, 0)" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {themeColor.color.map((e, i) => {
              return (
                <Icon.PaletteFill
                  key={i}
                  color={e.mainColor}
                  className="icon-color-palette"
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
