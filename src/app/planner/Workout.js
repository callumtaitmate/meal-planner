import React from "react";
import { AddFood } from "../components/SplitDesigner/plannerComponents/AddFood";
import { ConfigureFood } from "../components/SplitDesigner/plannerComponents/ConfigureFood";
import { Overview } from "../components/SplitDesigner/plannerComponents/Overview";

export default function Workout() {
  return (
    <>
      <div className="my-2">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Basic Split Designer
        </h1>
      </div>

      <button className="mt-1 w-30 text-center cursor-not-allowed bg-green-300 hover:bg-green-300 text-white text-xs font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline">
        Sign up to save
      </button>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AddFood />
        <ConfigureFood />
        <Overview />
      </div>
    </>
  );
}
