<template>
  <main>
    <template v-if="mode === 'list'">
      <ListMenu />
    </template>
    <template v-if="mode === 'form'">
      <Form />
    </template>
    <template v-if="mode === 'OTP'"> OTP </template>
    <template v-if="mode === 'DOB'"> DOB </template>
  </main>
</template>

<script setup>
import Form from "../components/Form.vue";
import ListMenu from "../components/ListMenu.vue";
import { storeToRefs } from "pinia";
import { useModeStore } from "../stores/mode";

const store = useModeStore();
const { mode } = storeToRefs(store);
// const { setMode } = store;
</script>
