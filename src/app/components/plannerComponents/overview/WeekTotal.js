import React from "react";
import { useOverviewStore } from "@/app/store/store";

export default function WeekTotal() {
  const { overview } = useOverviewStore((state) => ({
    overview: state.overview,
  }));

  let kcal = overview.reduce(
    (accumulator, current) => accumulator + current.kcal,
    0
  );
  let carb = overview.reduce(
    (accumulator, current) => accumulator + current.carb,
    0
  );
  let fat = overview.reduce(
    (accumulator, current) => accumulator + current.fat,
    0
  );
  let prot = overview.reduce(
    (accumulator, current) => accumulator + current.prot,
    0
  );
  let price = overview.reduce(
    (accumulator, current) => accumulator + current.price,
    0
  );


  return (
    <p className="my-3 text-xs text-center text-white bg-red-500 py-1 px-2 mr-2 rounded focus:outline-none focus:shadow-outline">
      <b>Week Total: {price} GBP</b> {kcal} Kcal - {carb}g Carbs | {fat}g Fat |{" "}
      {prot}g Protein
    </p>
  );
}
