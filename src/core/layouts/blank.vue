<script lang="ts">
import { defineComponent, resolveComponent, h } from "vue";

export default defineComponent({
  name: "BlankLayout",
  setup() {
    const RouterView = resolveComponent("router-view");

    return () => h(RouterView);
  },
});
</script>
