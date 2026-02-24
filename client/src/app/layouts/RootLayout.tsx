import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <nav>Navbar</nav>
      <Outlet />
    </div>
  );
};

export default RootLayout;
