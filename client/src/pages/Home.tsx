import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
// import { Plus } from "lucide-react";

const Home = () => {
  return (
    <main>
      <div className="flex flex-col justify-center items-center min-h-screen gap-y-4">
        <h2 className="text-2xl">Welcome to the home page</h2>
        <NavLink to="/login" end>
          <Button className="cursor-pointer">Login</Button>
        </NavLink>
        {/* <NavLink to="/signup" end>
          <Button className="cursor-pointer">Signup</Button>
        </NavLink> */}
      </div>
    </main>
  );
};

export default Home;
