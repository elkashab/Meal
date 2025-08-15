import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Ingredients() {
  const { id } = useParams();
  const [mealDetail, setmealDetail] = useState(null);

  async function getMealDetails(idMeal) {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idMeal
    );
    setmealDetail(data.meals[0]);
  }

  useEffect(
    function () {
      getMealDetails(id);
    },
    [id]
  );

  return (
    <div className="text-start bg-white rounded-2xl h-fit p-4 w-1/3 mt-12 me-2">
      <h1 className="text-2xl font-bold border-b-1 border-b-stone-500 pb-2">
        Ingredients
      </h1>
      <div className="flex justify-between border-b-1 border-b-stone-400 p-2">
        <p>{mealDetail?.strIngredient1}:</p>
        <p>{mealDetail?.strMeasure1}</p>
      </div>
      <div className="flex justify-between border-b-1 border-b-stone-400 p-2">
        <p>{mealDetail?.strIngredient2}:</p>
        <p>{mealDetail?.strMeasure2}</p>
      </div>
      <div className="flex justify-between border-b-1 border-b-stone-400 p-2">
        <p>{mealDetail?.strIngredient3}:</p>
        <p>{mealDetail?.strMeasure3}</p>
      </div>
      <div className="flex justify-between border-b-1 border-b-stone-400 p-2">
        <p>{mealDetail?.strIngredient4}:</p>
        <p>{mealDetail?.strMeasure4}</p>
      </div>
    </div>
  );
}

export default Ingredients;
