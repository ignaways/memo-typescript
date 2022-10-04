import "../../assets/styles/Card.css";
import "../../assets/styles/ColorTheme.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { isClosePopup, isPopupView } from "../../redux/features/globalState";
import { themeColor } from "../../services/constants/colorTheme";
import ButtonIconColorTheme from "../button/ButtonIconColorTheme";
import ButtonIconStatus from "../button/ButtonIconStatus";
import ButtonEditTask from "../button/ButtonEditTask"
import { Data } from "../../services/interface/TaskState";
import * as Icon from "react-bootstrap-icons";


const TaskCard: React.FC<Data> = ({title, description, time, date, status, color}) => {
  const dispatch = useDispatch();
  const clickButtonHandler = () => {
    dispatch(isClosePopup(false));
    dispatch(isPopupView("detailTask"));
  };

  return (
    <div className={`card-task ${color ?? "orange"}`} >
      <div style={{"display":"flex", "justifyContent":"space-between"}}>
        <div style={{"fontSize":"1.2em", "fontWeight":"bold"}}>{title}</div>
        <ButtonEditTask />
      </div>
      <div style={{"fontSize":".9em"}}>{description}</div>
      <ButtonIconStatus status={status}/>
      <ButtonIconColorTheme color={color}/>
    </div>
  );
};

export default TaskCard;
