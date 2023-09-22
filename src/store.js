import { create } from 'zustand';

// Create a Zustand store
const useStore = create((set) => ({
  amount: 0, // Initial value
  setAmount: (newAmount) => set({ amount: newAmount }),
  checkedOut: false,
  isCheckedOut: (status) => set({ checkedOut: status }),
  confirmedProblem: false,
  setConfirmed: (status) => set({ confirmedProblem: status }),
  submissionActive: false,

  // Function to check and set submissionActive
  checkAndUpdateSubmissionStatus: () => {
    const targetTime = new Date('2023-09-23T03:00:00'); // Target time (23rd September at 3 AM)

    const currentTime = new Date(); // Current time

    if (currentTime >= targetTime) {
      set({ submissionActive: true });
    }
  },
}));

export default useStore;
