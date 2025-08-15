import Ingredients from "../Ingredients/Ingredients";
import Mealinfo from "../Mealinfo/Mealinfo";

function Mealdetails() {
  return (
    <div className="bg-orange-50 w-4/5 pt-4 ps-4 flex gap-3">
      <Mealinfo />
      <Ingredients />
    </div>
  );
}

export default Mealdetails;
