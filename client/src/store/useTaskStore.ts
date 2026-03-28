import { create } from "zustand";
import { taskService, type Task } from "@/api/task";

interface TaskState {
  tasks: Task[];
  loading: boolean;
  fetchTasks: () => Promise<void>;
  removeTask: (id: string) => void;
  markTaskAsDone: (id: string, isCompleted: boolean) => Promise<void>;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  loading: false,
  fetchTasks: async () => {
    set({ loading: true });
    try {
      const data = await taskService.getAll();
      set({ tasks: data, loading: false });
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t._id !== id),
    })),
  markTaskAsDone: async (id, isCompleted) => {
    await taskService.markAsDone(id, isCompleted);
  },
}));
