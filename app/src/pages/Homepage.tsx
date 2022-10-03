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
  const { data, isLoading, isError } : any = useFetch("https://my-json-server.typicode.com/ignaways/memo-typescript/db");
  
  useEffect(() => {
    dispatch(isTask(data))
  }, [data])
  
  // const typeCard = useSelector((state: RootState) => state.mode.cardType);
  return (
    <>
      <div>
        <div className="row__card">
          <TaskList />

        </div>
      </div>
    </>
  );
};

export default Homepage;
