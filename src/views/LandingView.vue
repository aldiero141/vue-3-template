<template>
  <main>
    <template v-if="mode === 'menu'">
      <ListMenu />
    </template>
    <template v-if="mode === 'form'">
      <Form @back="onMenu" />
    </template>
    <template v-if="mode === 'OTP'"> <OtpPage @back="onMenu" /> </template>
    <template v-if="mode === 'DOB'"> <DobPage @back="onMenu" /> </template>
  </main>
</template>

<script setup>
import Form from "../components/Form.vue";
import ListMenu from "../components/ListMenu.vue";
import OtpPage from "../components/OtpPage.vue";
import DobPage from "../components/DobPage.vue";

import { storeToRefs } from "pinia";
import { useModeStore } from "../stores/mode";

const store = useModeStore();
const { mode } = storeToRefs(store);

function onMenu() {
  store.setMode("menu");
}
</script>
