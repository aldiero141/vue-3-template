<template>
  <div
    class="header flex flex-row w-full h-10 justify-between items-center bg-blue-500 p-0 m-0 z-10"
  >
    <div class="flex flex-row m-2 h-full items-center">
      <mdicon
        class="hover:bg-blue-400 hover:bg-opacity-50 cursor-pointer rounded-lg"
        name="menu"
        width="25"
        height="25"
        style="color: white"
        @click="toggleSidebar"
      />
    </div>

    <div class="flex flex-row capitalize h-full">
      <div
        class="w-[5rem] text-center flex-grow-1 rounded hover:bg-blue-400 hover:bg-opacity-50 text-white text-sm"
        v-for="(menu, index) in nav_menu"
        :key="index"
      >
        <button class="h-full" @click="onNavbarRoute(menu.route)">
          {{ menu.name }}
        </button>
      </div>
    </div>
  </div>

  <transition name="slide">
    <div
      v-if="isSidebarOpen"
      class="flex flex-col justify-between items-center w-[20vh] min-h-[95.1vh] bg-blue-400 absolute left-0 top-0 mt-10"
      style="z-index: 999"
    >
      <div class="w-full">
        <div
          v-for="(menu, index) in side_menu"
          :key="index"
          class="p-2 hover:bg-blue-500 hover:bg-opacity-50 w-full text-center cursor-pointer text-white"
          @click="onSidebarRoute(menu.route)"
        >
          {{ menu.name }}
        </div>
      </div>

      <div
        class="p-2 bg-red-500 hover:bg-red-600 w-full text-center cursor-pointer text-white"
      >
        Sign Out
      </div>
    </div>
  </transition>
  <slot />

  <div
    class="footer flex fixed inset-x-0 bottom-0 w-full h-6 text-sm p-1 justify-end"
  >
    Aldo Aldiero™ © {{ year }}
  </div>
</template>

<script setup>
import moment from "moment";
import router from "../router";
import { ref } from "vue";

const year = moment().year();
const isSidebarOpen = ref(false);
const nav_menu = [
  { name: "Landing", route: "/landing" },
  { name: "Dasboard", route: "/dashboard" },
  { name: "About", route: "/about" },
];

const side_menu = [
  { name: "Menu 1", route: "/menu_1" },
  { name: "Menu 2", route: "/menu_2" },
  { name: "Menu 3", route: "/menu_3" },
  { name: "Menu 4", route: "/menu_4" },
  { name: "Menu 5", route: "/menu_5" },
];

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

function onNavbarRoute(val) {
  router.push({ path: val });
}
function onSidebarRoute(val) {
  router.push({ path: `/dashboard${val}` });
}
</script>

<style scoped>
.slide-enter-active {
  transition: 0.7s;
  left: 0;
}

.slide-leave-active {
  transition: 0.7s;
  left: 0;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-20vw);
}
</style>
