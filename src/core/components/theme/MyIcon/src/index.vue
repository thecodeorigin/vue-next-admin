<template>
  <!-- These are for further upgrade using vue-fontawesome -->
  <i v-if="icon?.type === 'el'" :class="[icon?.class]" />
  <i v-else-if="icon?.type === 'fa'" :class="[icon?.class]" />
</template>
<script>
// src\core\components\theme\MyIcon\src\index.vue
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyIcon',

  props: {
    icon: {
      type: Object,
      default() {
        return {
          type: 'el',
          class: 'el-icon-document',
        }
      },
    },
  },
})
</script>
