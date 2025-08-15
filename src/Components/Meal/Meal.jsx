import axios from "axios";
import { useEffect, useState } from "react";
import Category from "../Category/Category";
import Mealcard from "../Mealcard/Mealcard";

function Meal() {
  let [allCategory, setallCategory] = useState(null);
  let [categoryMeals, setcategoryMeals] = useState(null);

  async function getAllCategory() {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
    );
    setallCategory(data.meals);
  }

  async function getCategoryMeals(category) {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category
    );

    setcategoryMeals(data.meals);
  }

  async function getInitMeals() {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );

    setcategoryMeals(data.meals);
  }

  useEffect(function () {
    getAllCategory();
    getInitMeals();
  }, []);

  return (
    <div className="bg-orange-50 w-4/5 p-4">
      <h1 className="text-5xl ml-5 text-transparent bg-gradient-to-r from-orange-400 to-red-800 bg-clip-text">
        Learn, Cook, Eat Your Food
      </h1>
      <ul className="flex flex-wrap space-x-2 space-y-2 mt-3 mb-3 p-2 content-between h-25">
        {allCategory?.map((category) => (
          <Category
            key={category.strCategory}
            category={category.strCategory}
            filter={() => getCategoryMeals(category.strCategory)}
          />
        ))}
      </ul>
      <div className="grid grid-cols-4 gap-5 ml-4">
        {categoryMeals?.map((meal) => (
          <Mealcard key={meal.idMeal} meal={meal} country={meal.idMeal} />
        ))}
      </div>
    </div>
  );
}

export default Meal;
