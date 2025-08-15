import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Meal from "./Components/Meal/Meal";
import Mealdetails from "./Components/Mealdetails/Mealdetails";

const router = createBrowserRouter([
  {
    path: "",
    element: <Home />,
    children: [
      { path: "", element: <Meal /> },
      { path: "mealdetails/:id", element: <Mealdetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
