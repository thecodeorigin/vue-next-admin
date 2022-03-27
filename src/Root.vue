<script lang="ts">
import { defineComponent, h, computed } from "vue";
import { ElConfigProvider } from "element-plus";
import { useRoute } from "vue-router";
import { Layouts } from "@constants/layouts";
import { useRootStore } from "@core/store";

import DefaultLayout from "@layouts/default.vue";
import BlankLayout from "@layouts/blank.vue";

const LayoutMap = Object.freeze({
  [Layouts.DEFAULT]: DefaultLayout,
  [Layouts.BLANK]: BlankLayout,
});

export default defineComponent({
  setup() {
    const rootStore = useRootStore();
    const route = useRoute();

    const layoutVNode = computed(() => {
      const layout = route.meta.layout as Layouts;

      return LayoutMap[layout] || DefaultLayout;
    });

    const isDarkMode = computed(() => rootStore.$state.isDarkMode);

    return () =>
      h(
        ElConfigProvider,
        {
          size: "small",
        },
        h("div", { class: ["min-h-screen", isDarkMode.value ? "dark" : ""] }, h(layoutVNode.value))
      );
  },
});
</script>
