import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const TaskList = () => {
  const data = useSelector((state: RootState) => state.task.data)
  console.log("🚀 ~ file: TaskList.tsx ~ line 6 ~ TaskList ~ data", data)
  
  return (
    <>
      <div>
        {/* {data.map((e,i) => {
          return(
            <>
              <div>

              </div>
            </>
          )
        })} */}
      </div>
    </>
  );
};

export default TaskList;