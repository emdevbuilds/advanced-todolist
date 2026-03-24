import { useEffect, useState } from "react";
import { taskService, type Task } from "@/api/task";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { formatTaskDate } from "@/utils/format-date";
import {
  Check,
  CopyPlus,
  EllipsisVertical,
  PencilLine,
  Trash2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null);

  const handleDelete = async () => {
    if (!taskToDelete) return;
    try {
      console.log(taskToDelete);

      await taskService.deleteTask(taskToDelete);
      setTasks(tasks.filter((t) => t._id !== taskToDelete));
      toast.success("Task deleted");
      setIsDeleteDialogOpen(false);
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Delete failed");
    }
  };

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
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this task.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setTaskToDelete(null)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="cursor-pointer" variant="ghost" size="icon">
                  <EllipsisVertical />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem className="cursor-pointer">
                    <Check /> Mark as done
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="cursor-pointer">
                    <PencilLine /> Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CopyPlus /> Duplicate
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem
                    onSelect={(e) => {
                      e.preventDefault(); // Stop the menu from closing immediately
                      setTaskToDelete(task._id);
                      setIsDeleteDialogOpen(true);
                    }}
                    className="text-destructive focus:text-destructive cursor-pointer"
                  >
                    <Trash2 className="text-destructive" />
                    <span>Delete Task</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))
      ) : (
        <p>No tasks found.</p>
      )}
    </main>
  );
};

export default Tasks;
