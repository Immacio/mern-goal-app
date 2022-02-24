import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

function GoalForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({ text }));
    setText("");
  };

  return (
    <section className="max-w-4xl m-auto px-3">
      <form onSubmit={onSubmit}>
        <div className="max-w-md m-auto flex flex-col">
          <label className="text-xl font-semibold" htmlFor="text">
            Goal
          </label>
          <input
            type="text"
            name="text"
            value={text}
            className="w-full border-2 rounded-md p-3 focus:outline-none mt-2"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="max-w-md m-auto flex flex-col mt-5">
          <button
            className="w-full font-bold text-md rounded-lg border px-10 py-2 bg-black text-white hover:bg-gray-800 transition ease-out hover:scale-105"
            type="submit"
          >
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
