import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Mealinfo() {
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
    <div className="w-2/3">
      <h1 className="text-4xl font-bold">{mealDetail?.strMeal}</h1>
      <div className="flex  justify-between mt-4 gap-2">
        <div className="w-1/2">
          <img
            src={mealDetail?.strMealThumb}
            alt={mealDetail?.strMeal}
            className="w-full rounded-2xl me-2"
          />
          <div className="flex justify-between w-3/4 m-auto gap/2">
            <button className="bg-red-500 px-3 py-2 rounded-lg text-white mt-5 cursor-pointer w-2/5">
              <Link to={mealDetail?.strYoutube} target="_blank">
                Youtube
              </Link>
            </button>
            <button className="bg-green-600 text-white px-3 py-2 rounded-lg mt-5 cursor-pointer w-2/5">
              <Link to={mealDetail?.strSource} target="_blank">
                Source
              </Link>
            </button>
          </div>
        </div>
        <p className="w-1/2">{mealDetail?.strInstructions}</p>
      </div>
    </div>
  );
}

export default Mealinfo;
