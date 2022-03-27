<template>
  <div class="min-h-screen bg-white dark:bg-dark-700 flex">
    <aside class="duration-300 border-r-1 border-gray-100 w-14">
      <DefaultSidebar :collapsed="isSidebarCollapsed" />
    </aside>
    <main class="flex-1 flex flex-col">
      <div class="flex-1">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRootStore } from "@core/store";

import DefaultSidebar from "@core/components/sidebar.vue";

export default defineComponent({
  name: "DefaultLayout",
  components: {
    DefaultSidebar,
  },
  setup() {
    const rootStore = useRootStore();
    const isSidebarCollapsed = computed(() => rootStore.$state.isSidebarCollapsed);

    return {
      isSidebarCollapsed,
    };
  },
});
</script>
