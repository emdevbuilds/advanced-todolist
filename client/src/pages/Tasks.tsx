import { useEffect, useState } from "react";
import { taskService, type Task } from "@/api/task";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { formatTaskDate } from "@/utils/format-date";
import { EllipsisVertical } from "lucide-react";

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
      <h1 className="text-2xl font-semibold mb-4">Tasks</h1>

      {/* 4. Map over the state, not the function call */}
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div
            key={task._id}
            className="flex flex-row justify-between bg-white p-6 rounded-2xl shadow w-full mb-4 border border-gray-200"
          >
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">{task.title}</h2>
              <p className="text-muted-foreground leading-6">
                {task.description}
              </p>
              <span className="text-sm text-gray-500">
                {formatTaskDate(task.createdAt)}
              </span>
            </div>
            <Button variant="ghost" size="icon">
              <EllipsisVertical />
            </Button>
          </div>
        ))
      ) : (
        <p>No tasks found.</p>
      )}
    </main>
  );
};

export default Tasks;
