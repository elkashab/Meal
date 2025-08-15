import Naventry from "../Naventry/Naventry";

const navEntries = [
  { to: "", name: "Meals", id: 1, current: true },
  { to: "mealdetails", name: "Ingredients", id: 2, current: false },
  { to: "", name: "Area", id: 3, current: false },
];

function Sidenav() {
  return (
    <div className="w-[20%] col-span-1 p-2">
      <img
        src="./../public/logo-BfNap0Pe.png"
        alt="Recipe"
        className="w-full block"
      />

      <ul className="mt-5 ml-3  space-y-8 ">
        {navEntries.map((entry) => (
          <Naventry key={entry.id} entry={{ ...entry }} />
        ))}
      </ul>
    </div>
  );
}

export default Sidenav;
