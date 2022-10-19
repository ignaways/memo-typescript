import "../../assets/styles/Card.css";
import "../../assets/styles/ColorTheme.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { isClosePopup, isPopupView } from "../../redux/features/globalState";
import { themeColor } from "../../services/constants/colorTheme";
import ButtonIconColorTheme from "../button/ButtonIconColorTheme";
import ButtonIconStatus from "../button/ButtonIconStatus";
import ButtonEditTask from "../button/ButtonEditTask";
import DateCard from "./DateCard";
import { Data } from "../../services/interface/TaskState";
import * as Icon from "react-bootstrap-icons";

const TaskCard: React.FC<Data> = ({
  _id,
  title,
  description,
  time,
  date,
  status,
  color,
}) => {
  const dispatch = useDispatch();
  const clickButtonHandler = () => {
    dispatch(isClosePopup(false));
    dispatch(isPopupView("detailTask"));
  };

  return (
    <div className={`card-task ${color ?? "orange"}`}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontSize: "1.3em", fontWeight: "bold" }}>{title}</div>
        <ButtonEditTask />
      </div>
      <div style={{ fontSize: "1em", height: "13.5vh" }}>{description}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div style={{ display: "flex" }}>
          <ButtonIconStatus status={status} id={_id} />
          <ButtonIconColorTheme color={color} id={_id} />
        </div>
        <div>
          <DateCard color={color} time={time} date={date} />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
