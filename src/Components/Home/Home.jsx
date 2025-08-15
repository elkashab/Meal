import { Outlet } from "react-router-dom";
import Sidenav from "../Sidenav/Sidenav";

function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidenav />
      <Outlet />
    </div>
  );
}

export default Home;
