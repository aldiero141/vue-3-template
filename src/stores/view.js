import { defineStore } from "pinia";
import { computed, ref } from "vue";

// ---- Composition API
export const useViewStore = defineStore("view", () => {
  // SETTER
  const view = ref("landing"); // ['landing', 'dashboard']
  // GETTER
  const getView = computed(() => view.value);
  // ACTION
  function setView(val) {
    this.view = val;
  }
  return { view, setView, getView };
});
