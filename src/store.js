import { create } from 'zustand';

// Create a Zustand store
const useStore = create((set) => ({
  amount: 0, // Initial value
  setAmount: (newAmount) => set({ amount: newAmount }),
  checkedOut: false,
  isCheckedOut: (status) => set({ checkedOut: status }),
  confirmedProblem: false,
  setConfirmed: (status) => set({ confirmedProblem: status }),
}));

export default useStore;
