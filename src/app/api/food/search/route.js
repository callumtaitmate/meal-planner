import { NextResponse } from "next/server";

async function fetchFood() {
  const response = await fetch(
    `https://api.edamam.com/api/food-database/v2/parser?app_id=e7d0c9e0&app_key=0d3dae92f06d278e9ccba7a65ff864ac&ingr=bacon`,

    {
      method: "GET",
      headers: {
        "app_id": "f86be62b",
        "app_key": "74999a34a2223b5036d20d56462e01ce",
      },
    }
  );

  const data = await response.json();
  return data;
}

export async function GET(request) {
  const food = await fetchFood();
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const filteredFoods = food.hints.filter((food) => {
    return food.food.label.toLowerCase().includes(query.toLowerCase());
  });
  return NextResponse.json(filteredFoods);
}
