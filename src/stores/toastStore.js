import { writable } from "svelte/store";

export const toast = writable({
  message: "",
  type: "success", // success | error | info
  visible: false
});

export function showToast(message, type = "success", duration = 2500) {
  toast.set({ message, type, visible: true });

  setTimeout(() => {
    toast.set({ message: "", type, visible: false });
  }, duration);
}
