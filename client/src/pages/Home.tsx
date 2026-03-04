import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Home = () => {
  return (
    <main>
      <div className="flex flex-col justify-center items-center min-h-screen gap-y-4">
        <h2 className="text-2xl">You don't have any tasks yet!</h2>
        <NavLink to="/add-task" end>
          <Button className="cursor-pointer">
            Create Task <Plus />
          </Button>
        </NavLink>
      </div>
    </main>
  );
};

export default Home;
