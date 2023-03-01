<template>
  <div class="flex flex-col m-4 w-screen justify-center items-center">
    <div class="flex flex-row justify-center">
      <label
        class="flex flex-row justify-start items-center border-2 border-gray-200 rounded px-2 mr-2 w-[70vw]"
      >
        <mdicon
          class="text-gray-400 mr-2"
          width="25"
          height="25"
          name="magnify"
        />
        <input class="h-full outline-none" type="text" />
      </label>
      <VueDatePicker v-model="date" />
    </div>
    <Table :data="table_data" />
    <Pagination
      :total-pages="total_pages"
      :current-page="current_page"
      @on-page="
        current_page < total_pages + 1 && current_page > 0 ? onPage($event) : []
      "
      @prev-page="current_page > 1 ? onPage($event) : []"
      @next-page="current_page < total_pages ? onPage($event) : []"
    />
  </div>
</template>

<script setup>
import Pagination from "../../components/Dashboard/Pagination.vue";
import Table from "../../components/Dashboard/Table.vue";
import { useViewStore } from "../../stores/view";
import { reactive, ref } from "vue";

const store = useViewStore();
const pathArray = window.location.pathname.split("/");
const path = pathArray[1];
store.setView(path);

const table_data = reactive([]);
const current_page = ref(1);
const date = ref();

const items = reactive([
  {
    product: "Book",
    color: "White",
    category: "Odd",
    price: "5000",
  },
  {
    product: "Pencil",
    color: "Black",
    category: "Even",
    price: "1000",
  },
  {
    product: "Ruler",
    color: "Transparent",
    category: "Odd",
    price: "3000",
  },
  {
    product: "Eraser",
    color: "Grey",
    category: "Even",
    price: "500",
  },
  {
    product: "Gun",
    color: "Black",
    category: "Odd",
    price: "50000",
  },
  {
    product: "Book 1",
    color: "White",
    category: "Odd",
    price: "99999",
  },
  {
    product: "Pencil 1",
    color: "Black",
    category: "Even",
    price: "99999",
  },
  {
    product: "Ruler 1",
    color: "Transparent",
    category: "Odd",
    price: "99999",
  },
  {
    product: "Eraser 1",
    color: "Grey",
    category: "Even",
    price: "99999",
  },
  {
    product: "Gun 1",
    color: "Black",
    category: "Odd",
    price: "99999",
  },
  {
    product: "Book 2",
    color: "White",
    category: "Odd",
    price: "5000",
  },
  {
    product: "Pencil 2",
    color: "Black",
    category: "Even",
    price: "1000",
  },
  {
    product: "Ruler 2",
    color: "Transparent",
    category: "Odd",
    price: "3000",
  },
  {
    product: "Eraser 2",
    color: "Grey",
    category: "Even",
    price: "500",
  },
  {
    product: "Gun 2",
    color: "Black",
    category: "Odd",
    price: "50000",
  },
]);

function Paginator(items, page, per_page) {
  const cur_page = page || 1;
  const cur_per_page = per_page || 10;
  const offset = (page - 1) * per_page;
  const paginatedItems = items.slice(offset).slice(0, per_page);
  const total_pages = Math.ceil(items.length / per_page);

  return {
    page: cur_page,
    // per_page: cur_per_page,
    // pre_page: cur_page - 1 ? cur_page - 1 : null,
    // next_page: total_pages > cur_page ? cur_page + 1 : null,
    // total: items.length,
    total_pages: total_pages,
    data: paginatedItems,
  };
}

const { total_pages, data } = Paginator(items, current_page, 5);
Object.assign(table_data, data);

function onPage(page) {
  const { data } = Paginator(items, page, 5);
  Object.assign(table_data, data);
  this.current_page = page;
}
</script>
