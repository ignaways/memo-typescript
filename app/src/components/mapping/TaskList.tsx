import React, { useEffect, useState } from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import TaskCard from "../card/TaskCard";
import { Data } from "../../services/interface/TaskState";

const TaskList = () => {
  const datas: any = useSelector((state: RootState) => state.task.data);
  const typeCard = useSelector((state: RootState) => state.mode.cardType);
  return (
    <>
      <div>
        {datas?.map((e: Data, i: number) => {
          const obj = {
            _id: e._id,
            title: e.title,
            description: e.description,
            time: e.time,
            date: e.date,
            status: e.status,
            color: e.color,
          };
          return (
            <div
              key={i}
              className={`${
                typeCard ? "column__card-mutiple" : "container__card-single"
              }`}
            >
              <TaskCard {...obj} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TaskList;
