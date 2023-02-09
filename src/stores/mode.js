import { defineStore } from "pinia";

export const useModeStore = defineStore("mode", {
  state: () => ({
    mode: "list",
  }),
  actions: {
    async setMode(val) {
      this.mode = val;
    },
  },
});
