import { defineStore } from "pinia";
import { computed, ref } from "vue";

// ---- Option API
// export const useModeStore = defineStore("mode", {
//   state: () => ({
//     mode: "list",
//   }),
//   actions: {
//     async setMode(val) {
//       this.mode = val;
//     },
//   },
// });

// ---- Composition API
export const useModeStore = defineStore("mode", () => {
  // SETTER
  const mode = ref("menu");
  // GETTER
  const getMode = computed(() => mode.value);
  // ACTION
  function setMode(val) {
    this.mode = val;
  }

  return { mode, getMode, setMode };
});
