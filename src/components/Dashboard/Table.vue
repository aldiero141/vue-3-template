<template>
  <div class="flex flex-col items-center my-16 mx-4 w-screen">
    <div
      class="flex flex-col relative overflow-x-auto shadow-l w-full rounded items-center justify-center"
    >
      <table class="w-[90vw] text-sm text-left text-gray-700 rounded">
        <thead class="text-xs uppercase bg-blue-500 text-white">
          <tr>
            <th scope="col" class="px-6 py-3">Product name</th>
            <th scope="col" class="px-6 py-3">Color</th>
            <th scope="col" class="px-6 py-3">Category</th>
            <th scope="col" class="px-6 py-3">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b even:bg-blue-50 odd:bg-blue-100"
            v-for="(item, index) in data"
            :key="index"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {{ item.product }}
            </th>
            <td class="px-6 py-4">{{ item.color }}</td>
            <td class="px-6 py-4">{{ item.category }}</td>
            <td class="px-6 py-4">{{ item.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Array,
});
</script>
