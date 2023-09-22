import { create } from 'zustand';

// Create a Zustand store
const useStore = create((set) => ({
  amount: 0, // Initial value
  setAmount: (newAmount) => set({ amount: newAmount }),
  checkedOut: false,
  isCheckedOut: (status) => set({ checkedOut: status }),
  confirmedProblem: false,

  checkAndUpdateCheckoutStatusOnTimeout: () => {
    const targetTime = new Date(import.meta.env.VITE_FINAL_CHECKOUT);

    const currentTime = new Date(); // Current time

    if (currentTime >= targetTime) {
      set({ checkedOut: true });
      set({ confirmedProblem: true });
    }
  },

  setConfirmed: (status) => set({ confirmedProblem: status }),
  submissionActive: false,

  // Function to check and set submissionActive
  checkAndUpdateSubmissionStatus: () => {
    const targetTime = new Date(import.meta.env.VITE_SUBMISSION_TIME); // Target time (23rd September at 3 AM)

    const currentTime = new Date(); // Current time

    if (currentTime >= targetTime) {
      set({ submissionActive: true });
    }
  },

  siteActive: false,

  // Function to check and set submissionActive
  checkAndUpdateSiteStatus: () => {
    const targetTime = new Date(import.meta.env.VITE_TARGET_TIME); // Target time (23rd September at 3 AM)

    const currentTime = new Date(); // Current time

    if (currentTime >= targetTime) {
      set({ siteActive: true });
    }
  },
}));

export default useStore;
