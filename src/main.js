import { createApp } from "vue";
import { createPinia } from "pinia";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const app = createApp(App);
app.use(createPinia());
app.use(mdiVue, {
  icons: mdijs,
});

app.use(router);
app.component("VueDatePicker", VueDatePicker);

app.mount("#app");
