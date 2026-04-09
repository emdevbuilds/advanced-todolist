import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
// import { Plus } from "lucide-react";

const Home = () => {
  return (
    <main>
      <div className="min-h-screen w-full relative">
        {/* Emerald Void */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 10%, #000000 40%, #072607 100%)",
          }}
        />
        {/* Your Content/Components */}
        <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="flex flex-col gap-y-8">
            <h1 className="text-6xl leading-18">
              Stay Organized, Stay Creative.
            </h1>
            <p className="text-lg leading-8">
              Organize your tasks and unleash your creativity with our powerful
              todo app.
            </p>
            <div className="flex justify-center gap-x-4">
              <NavLink to="/signup" end>
                <Button className="cursor-pointer" size={"lg"}>
                  Get Started
                </Button>
              </NavLink>
              <NavLink to="/login" end>
                <Button className="cursor-pointer" size={"lg"}>
                  Login
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
