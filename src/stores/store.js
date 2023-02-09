import { ref } from "vue";
import { defineStore } from "pinia";

export const useModeStore = defineStore("mode", () => {
  const mode = ref("list");
  function setMode(val) {
    mode.value = val;
  }
  return { mode };
});
