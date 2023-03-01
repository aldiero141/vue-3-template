<template>
  <Alert :status="status" :type="type" :message="message" />
  <AppBar :view="view">
    <RouterView />
  </AppBar>
</template>

<script setup>
import { RouterView } from "vue-router";
import { useAlertStore } from "./stores/alert";
import { useViewStore } from "./stores/view";
import { storeToRefs } from "pinia";
import { onMounted, watch } from "vue";
import Alert from "./components/Alert.vue";
import AppBar from "./components/AppBar.vue";

const store = useAlertStore();
const { status, type, message } = storeToRefs(store);

const storeView = useViewStore();
const { view } = storeToRefs(storeView);

watch(status, (newStatus) => {
  if (newStatus) {
    setTimeout(() => {
      store.setAlert({
        status: false,
        type: "",
        message: "",
      });
    }, 1000);
  }
});

onMounted(() => {
  // console.log(store);
});
</script>
