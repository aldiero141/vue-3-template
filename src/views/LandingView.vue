<template>
  <main>
    <template v-if="mode === 'list'">
      <ListMenu />
    </template>
    <template v-if="mode === 'form'">
      <Form @back="onListMenu" />
    </template>
    <template v-if="mode === 'OTP'"> <OtpPage @back="onListMenu" /> </template>
    <!-- <template v-if="mode === 'DOB'"> DOB </template> -->
  </main>
</template>

<script setup>
import Form from "../components/Form.vue";
import ListMenu from "../components/ListMenu.vue";
import OtpPage from "../components/OtpPage.vue";
import { storeToRefs } from "pinia";
import { useModeStore } from "../stores/mode";

const store = useModeStore();
const { mode } = storeToRefs(store);

function onListMenu() {
  store.setMode("list");
}
</script>
