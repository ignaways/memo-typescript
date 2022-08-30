// import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
// import { isCardType } from "../redux/features/mode";
import TaskCard from "../components/card/TaskCard";
import '../assets/styles/App.css'
const Homepage = () => {
  const maptest = [1, 2,1, 2];
  const typeCard = useSelector((state: RootState) => state.mode.cardType);
  console.log(typeCard);
  
  return (
    <>
      <div>
      <div className="row__card">
        {maptest.map((e, i) => {
          return (
            <div
              className={`${
                typeCard ? "column__card-mutiple" : "container__card-single"
              }`}
            >
              <TaskCard />
            </div>
          );
        })}
        </div>
      </div>
    </>
  );
};

export default Homepage;
