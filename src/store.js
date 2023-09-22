import { create } from 'zustand';

// Create a Zustand store
const useStore = create((set) => ({
  amount: 0, // Initial value
  setAmount: (newAmount) => set({ amount: newAmount }),
}));

export default useStore;
