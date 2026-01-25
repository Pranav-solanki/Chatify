import { create } from "zustand";
import { axiosInstance } from "../libs/axios";
import toast from "react-hot-toast";
export const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: false,
  isLoggedIn: false,
  isSigningUp: false,
  isLoggingIn: false,

  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const res = await axiosInstance.get("/auth/check");
      console.log(res);
      set({ authUser: res.data });
    } catch (error) {
      console.error("Error in auth", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const resp = await axiosInstance.post("/auth/signup", data);
      set({ authUser: resp.data });
      toast.success("Acoount created successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const resp = await axiosInstance.post("/auth/login", data);
      set({ authUser: resp.data });
      toast.success("Logged in successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      const resp = await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      
    }
  },
}));
