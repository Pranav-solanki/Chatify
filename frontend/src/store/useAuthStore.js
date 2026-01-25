import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: { name: "pranav", age: 32 },
  isLoggedIn: false,
  login: () => {
    console.log("We just logged in");
    set({ isLoggedIn: true });
  },
}));
