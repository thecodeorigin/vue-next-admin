<script lang="ts">
import { defineComponent, h, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Layouts } from '@constants/layouts'

import DefaultLayout from '@layouts/default.vue'
import BlankLayout from '@layouts/blank.vue'

const LayoutMap = Object.freeze({
  [Layouts.DEFAULT]: DefaultLayout,
  [Layouts.BLANK]: BlankLayout,
})

export default defineComponent({
  setup() {
    const route = useRoute()

    const layoutVNode = computed(() => {
      const layout = route.meta.layout
      return LayoutMap[layout] || DefaultLayout
    })

    return () => h(layoutVNode.value)
  }
})
</script>
