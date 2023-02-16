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
  const view = ref("landing");
  // GETTER
  const getMode = computed(() => mode.value);
  const getView = computed(() => view.value);
  // ACTION
  function setMode(val) {
    this.mode = val;
  }
  function setState(val) {
    this.view = val;
  }
  return { mode, view, getMode, getView, setMode, getView };
});
