import "../../assets/styles/App.css";
import "../../assets/styles/Icon.css";
import * as Icon from "react-bootstrap-icons";
import { themeColor } from "../../services/constants/colorTheme";
import { useDispatch } from "react-redux";
import { isColorTheme } from "../../redux/features/mode";
// import {dummyMemo} from "../../services/constants/dataDummy"

const ButtonIconColorTheme = ({ color }: { color: string }) => {
  const dispatch = useDispatch();

  const colorHandlerChange = (code: number) => {
    dispatch(isColorTheme(code + 1));
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
                  onClick={() => (i)}
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
