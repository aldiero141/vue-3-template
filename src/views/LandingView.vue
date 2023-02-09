<template>
  <main>
    <template v-if="mode === 'list'">
      <ListMenu />
    </template>
    <template v-if="mode === 'form'">
      <Form />
    </template>
    <!-- <button @click="setMode('form')">BUTTON</button> -->
    <!-- {{ mode }} -->
  </main>
</template>

<script setup>
import ListMenu from "../components/ListMenu.vue";
import Form from "../components/Form.vue";
import { storeToRefs } from "pinia";
import { useModeStore } from "../stores/mode";

const store = useModeStore();
const { mode } = storeToRefs(store);
// const { setMode } = store;
</script>
