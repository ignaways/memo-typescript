import React,{ useEffect, useState } from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { TaskState } from "../../services/interface/TaskState";


const TaskList : React.FC = () => {
  const data: any = useSelector((state: RootState) => state.task.data)
  
  return (
    <>
      <div>
        {data.data.map(() => {
          return(
            <>
              <div>
                hello
              </div>
            </>
          )
        })}
      </div>
    </>
  );
};

export default TaskList;