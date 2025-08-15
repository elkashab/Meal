import { Link } from "react-router-dom";

function Category(props) {
  return (
    <div>
      <li
        onClick={props.filter}
        className="border border-stone-400 rounded-2xl px-6 py-2 cursor-pointer font-bold hover:scale-105 hover:bg-white text-stone-400"
      >
        <Link to="#">{props.category}</Link>
      </li>
    </div>
  );
}

export default Category;
