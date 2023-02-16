import { defineStore } from "pinia";
import { computed, ref } from "vue";

// ---- Composition API
export const useAlertStore = defineStore("alert", () => {
  // SETTER
  const status = ref(false);
  const type = ref(""); // ['success','error','warning']
  const message = ref("");

  // GETTER
  const getAlert = computed(() => {
    return {
      status: status.value,
      type: type.value,
      message: message.value,
    };
  });
  const getStatus = computed(() => {
    status.value;
  });
  const getType = computed(() => {
    type.value;
  });
  const getMessage = computed(() => {
    message.value;
  });

  // ACTION
  function setAlert(val) {
    this.type = val.type;
    this.status = val.status;
    this.message = val.message;
  }
  return {
    status,
    type,
    message,
    getAlert,
    getStatus,
    getType,
    getMessage,
    setAlert,
  };
});
