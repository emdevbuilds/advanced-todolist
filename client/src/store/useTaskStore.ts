import { create } from "zustand";
import { taskService, type Task } from "@/api/task";

interface TaskState {
  tasks: Task[];
  loading: boolean;
  createTask: (data: { title: string; description: string }) => Promise<void>;
  fetchTasks: () => Promise<void>;
  removeTask: (id: string) => Promise<void>;
  markTaskAsDone: (id: string, isCompleted: boolean) => Promise<void>;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  loading: false,

  createTask: async (data) => {
    const newTask = await taskService.create(data);
    set((state) => ({
      tasks: [newTask, ...state.tasks],
    }));
  },

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

  removeTask: async (id) => {
    await taskService.deleteTask(id);
    set((state) => ({
      tasks: state.tasks.filter((t) => t._id !== id),
    }));
  },

  markTaskAsDone: async (id, isCompleted) => {
    const updatedTask = await taskService.markAsDone(id, isCompleted);
    set((state) => ({
      tasks: state.tasks.map((t) => (t._id === id ? updatedTask : t)),
    }));
  },
}));
