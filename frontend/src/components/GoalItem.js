import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

function GoalItem({ goal }) {
  const dispatch = useDispatch();
  return (
    <div className="border rounded-lg text-center p-3  bg-slate-200 w-[100%] md:max-w-[45%] my-3 mx-5 md:mx-0">
      <div className="font-semibold text-md">
        {new Date(goal.createdAt).toLocaleString("en-US")}
      </div>
      <h2 className="font-bold text-2xl">{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))}>
        Delete Goal
      </button>
    </div>
  );
}

export default GoalItem;
