import { create } from "zustand"

export const useUserStore = create((set) => {
  return {
    // state
    user: null,
    // actions
    setUser: (user) => set({ user }),
  }
})
