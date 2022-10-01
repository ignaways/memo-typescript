// import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
// import { isCardType } from "../redux/features/mode";
import TaskCard from "../components/card/TaskCard";
import "../assets/styles/App.css";
// import { dummyMemo } from "../services/constants/dataDummy";
const Homepage = () => {
  const typeCard = useSelector((state: RootState) => state.mode.cardType);
  return (
    <>
      <div>
        <div className="row__card">
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
