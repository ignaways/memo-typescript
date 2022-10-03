import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { isTask, isLoading, isError } from "../redux/features/task";
// import { isCardType } from "../redux/features/mode";
import TaskList from "../components/mapping/TaskList";
import useFetch from "../hooks/useFecth";
import "../assets/styles/App.css";
// import { dummyMemo } from "../services/constants/dataDummy";
const Homepage = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = useFetch("https://my-json-server.typicode.com/ignaways/memo-typescript/db");
  
  dispatch(isTask(data))
  
  const typeCard = useSelector((state: RootState) => state.mode.cardType);
  return (
    <>
      <div>
        <div className="row__card">
          <TaskList />

          {/* {dummyMemo.data.map((e, i) => {
            return (
              <div
                className={`${
                  typeCard ? "column__card-mutiple" : "container__card-single"
                }`}
              >
                <TaskCard  />
              </div>
            );
          })} */}
        </div>
      </div>
    </>
  );
};

export default Homepage;
