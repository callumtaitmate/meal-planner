"use client";
import Meal from "./meal";
import Workout from "./Workout";
import { useState } from "react";
export default function Planner() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="min-h-screen max-w-7xl py-4 px-4 mx-auto sm:py-8 sm:px-8 lg:px-8 lg:py-8 xs:px-8 xs:py-8">
      <label className="inline-flex items-center rounded-md cursor-pointer dark:text-gray-100 text-xs">
        <input
          onClick={handleCheckboxChange}
          id="Toggle3"
          type="checkbox"
          className="hidden peer"
        />
        <span
          className={
            isChecked
              ? "px-2 py-1 rounded-l-md bg-gray-300 text-white font-semibold"
              : "px-2 py-1 rounded-l-md bg-green-300 peer-checked:dark:bg-gray-700 text-white font-semibold"
          }
        >
          Meals
        </span>
        <span
          className={
            isChecked
              ? "px-2 py-1 rounded-r-md bg-green-300 text-white font-semibold"
              : "px-2 py-1 rounded-r-md bg-gray-300  text-white font-semibold"
          }
        >
          Exercises
        </span>
      </label>

      <div>{isChecked ? <Workout /> : <Meal />}</div>

      <p className="text-center mt-5">mealbudget.pro</p>
    </div>
  );
}
