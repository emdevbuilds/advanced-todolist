// import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const App = () => {
  return (
    <main>
      <div className="flex flex-col justify-center items-center text-bold h-screen gap-y-4">
        <h2 className="text-2xl">You don't have any tasks yet!</h2>
        <Button className="ml-4">
          Create Task <Plus />
        </Button>
      </div>
    </main>
  );
};

export default App;
