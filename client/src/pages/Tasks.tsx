import { useEffect, useState } from "react";
import { taskService, type Task } from "@/api/task";
import { toast } from "sonner";

const Tasks = () => {
  // 1. Create a state to hold the tasks
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. Fetch the data when the component loads
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await taskService.getAll();
        setTasks(data); // 3. Update state with the results
      } catch (error) {
        console.error("Fetch error:", error);
        toast.error("Failed to load tasks");
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []); // Empty array means "run only once on mount"

  if (loading) return <p>Loading tasks...</p>;

  return (
    <main className="flex flex-col justify-center items-center min-h-screen p-4">
      <h1 className="text-2xl font-semibold mb-4">Tasks {tasks.length}</h1>

      {/* 4. Map over the state, not the function call */}
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div
            key={task._id}
            className="bg-white p-4 rounded shadow w-full max-w-md mb-4 border border-gray-200"
          >
            <h2 className="text-xl font-bold">{task.title}</h2>
            <p className="text-gray-600">{task.description}</p>
          </div>
        ))
      ) : (
        <p>No tasks found.</p>
      )}
    </main>
  );
};

export default Tasks;
