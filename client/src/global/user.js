import { create } from "zustand"

export const useUserStore = create((set) => {
  return {
    // state
    user: {},
    // actions
    setUser: (user) => set({ user }),
  }
})
