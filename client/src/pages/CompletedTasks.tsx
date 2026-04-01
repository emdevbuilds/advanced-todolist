import { useEffect } from "react";
import { useTaskStore } from "@/store/useTaskStore";

const CompletedTasks = () => {
  const { tasks, loading, fetchTasks } = useTaskStore();

  useEffect(() => {
    fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <p>Loading completed tasks...</p>;

  return (
    <main className="flex flex-col justify-center items-center min-h-screen p-4">
      <h1 className="text-2xl font-semibold mb-4">Completed Tasks</h1>
      {tasks.length > 0 ? (
        tasks
          .filter((task) => task.completed)
          .map((task) => (
            <div
              key={task._id}
              className="flex flex-row justify-between bg-white p-6 rounded-2xl shadow w-full mb-4 border border-gray-200"
            >
              <div className="space-y-2">
                <h2 className="text-lg font-semibold">{task.title}</h2>
                <p className="text-muted-foreground leading-6">
                  {task.description}
                </p>
              </div>
            </div>
          ))
      ) : (
        <p>No completed tasks.</p>
      )}
    </main>
  );
};

export default CompletedTasks;
