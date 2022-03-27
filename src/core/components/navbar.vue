<template>
  <nav class="h-14 px-3 flex items-center justify-between">
    <span>Stuff</span>
    <span
      class="
        py-2
        pl-2
        pr-4
        inline-flex
        items-center
        cursor-pointer
        rounded-full
        bg-gray-100
        hover:bg-gray-200
        text-dark
        dark:bg-dark dark:text-gray-100 dark:hover:bg-dark-600
      "
    >
      <el-avatar
        size="small"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <span class="ml-2 font-bold">Hehhe</span>
    </span>
    <!--  -->
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultNavbar",
  setup() {
    return {};
  },
});
</script>
