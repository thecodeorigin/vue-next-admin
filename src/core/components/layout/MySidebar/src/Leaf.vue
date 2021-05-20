<template>
  <el-menu-item :index="index" :disabled="disabled">
    <MyIcon :icon="icon" />
    <template #title>
      <span class="el-menu__title-inner">{{ label }}</span>
    </template>
  </el-menu-item>
</template>
<script>
import { MyIcon } from '@theme'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SidebarLeaf',
  functional: true,
  components: {
    MyIcon,
  },
  props: {
    index: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: 'Sidebar group',
    },
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
