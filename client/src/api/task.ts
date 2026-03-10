import api from "./axiosInstance";

export interface Task {
  _id?: string;
  title: string;
  description: string;
}

export const taskService = {
  create: async (data: Task) => {
    // Axios automatically handles JSON.stringify and res.ok checks
    const response = await api.post<Task>("/tasks", data);
    return response.data;
  },
  // ... other methods like getAll, update, delete
};
