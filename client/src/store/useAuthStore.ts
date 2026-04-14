import { create } from "zustand";
import { authClient } from "@/lib/auth-client";

interface AuthState {
  isLoading: boolean;
  error: string | null;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoading: false,
  error: null,

  signup: async (name, email, password) => {
    set({ isLoading: true, error: null });
    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
    });

    if (error) {
      set({ error: error.message, isLoading: false });
      return false;
    }

    set({ isLoading: false });
    return true;
  },

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    const { error } = await authClient.signIn.email({ email, password });

    if (error) {
      set({ error: error.message, isLoading: false });
      return false;
    }

    set({ isLoading: false });
    return true;
  },

  logout: async () => {
    await authClient.signOut();
  },

  clearError: () => set({ error: null }),
}));
