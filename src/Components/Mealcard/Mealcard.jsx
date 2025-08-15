import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import "./mealcard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Mealcard(props) {
  async function getMealDetails(idMeal) {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idMeal
    );
    setcountry(data.meals[0].strArea);
  }

  const [country, setcountry] = useState(null);
  useEffect(function () {
    getMealDetails(props.country);
  }, []);
  return (
    <div className=" bg-white rounded-4xl flex flex-col items-center mt-15 hover:scale-105 text-center justify-between hover:duration-300">
      <img
        src={props.meal.strMealThumb}
        alt="meal"
        className="w-[50%] rounded-full hover:rotate-[360deg] duration-700 relative -top-6"
      />
      <h6 className="text-lg mt-3 font-bold">{props.meal.strMeal}</h6>
      <div className="flex justify-between items-center mt-4 w-[40%]">
        <FontAwesomeIcon icon={solidIcons.faGlobe} />
        <span> {country}</span>
      </div>
      <button className="bg-green-700 px-3 py-2 my-3 text-white rounded-2xl">
        <Link to={`mealdetails/${props.meal.idMeal}`}>View Receipe</Link>
      </button>
    </div>
  );
}

export default Mealcard;
