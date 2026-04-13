import api from "./axiosInstance";

export interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  userId: string;
  createdAt: string;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export const taskService = {
  create: async (data: { title: string; description: string }) => {
    const response = await api.post<ApiResponse<Task>>("/tasks", data);
    return response.data.data;
  },

  getAll: async () => {
    const response = await api.get<ApiResponse<Task[]>>("/tasks");
    return response.data.data;
  },

  deleteTask: async (id: string) => {
    const response = await api.delete<{ success: boolean; message: string }>(
      `/tasks/${id}`,
    );
    return response.data;
  },

  markAsDone: async (id: string, completed: boolean) => {
    const response = await api.patch<ApiResponse<Task>>(`/tasks/${id}`, {
      completed,
    });
    return response.data.data;
  },
};
