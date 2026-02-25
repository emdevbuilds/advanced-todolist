import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <nav className="text-red-700">Navbar</nav>
      <Outlet />
    </div>
  );
};

export default RootLayout;
