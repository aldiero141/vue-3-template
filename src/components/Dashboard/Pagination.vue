<template>
  <div class="flex flex-col items-center justify-center">
    <nav aria-label="Page navigation example">
      <ul class="inline-flex items-center -space-x-px">
        <li>
          <a
            href="#"
            class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-blue-200 hover:text-gray-700"
            @click="emit('prevPage', prevPage)"
          >
            <span class="sr-only">Previous</span>
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>

        <div v-for="(total, index) in props.totalPages">
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              :class="{
                'bg-blue-300 text-white': currentPage == index + 1,
              }"
              @click="emit('onPage', index + 1)"
              >{{ index + 1 }}</a
            >
          </li>
        </div>
        <li>
          <a
            href="#"
            class="block px-3 py-2 leading-tight text-gray-500 bg-gray-100 border border-gray-300 rounded-r-lg hover:bg-blue-200 hover:text-gray-700"
            @click="emit('nextPage', nextPage)"
          >
            <span class="sr-only">Next</span>
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  totalPages: Number,
  currentPage: Number,
});
const emit = defineEmits(["onPage", "nextPage", "prevPage"]);

// const nextPage = computed(props.totalPages + 1);
// const prevPage = computed(props.totalPages - 1);

const nextPage = computed(() => {
  return props.currentPage + 1;
});
const prevPage = computed(() => {
  return props.currentPage - 1;
});
</script>
