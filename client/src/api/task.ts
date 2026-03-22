import api from "./axiosInstance";

export interface Task {
  _id?: string;
  title: string;
  description: string;
  createdAt: string;
}

export const taskService = {
  // CREATE (POST)
  create: async (data: Task) => {
    const response = await api.post<Task>("/tasks", data);
    return response.data;
  },

  // READ ALL (GET)
  getAll: async () => {
    const response = await api.get<{ success: boolean; data: Task[] }>(
      "/tasks",
    );
    return response.data.data;
  },
};
