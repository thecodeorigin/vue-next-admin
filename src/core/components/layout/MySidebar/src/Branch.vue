<template>
  <el-submenu
    v-if="children?.length > 0"
    :index="`${index}`"
    :disabled="disabled"
  >
    <template #title>
      <MyIcon :icon="icon" />
      <span class="el-menu__title-inner">{{ label }}</span>
    </template>
    <SubBranch
      v-for="child in children.filter((item) => item.options)"
      :key="child.path"
      :index="child.path"
      :disabled="child?.options?.disabled"
      :label="child?.options?.label"
      :icon="child?.options?.icon"
      :children="child?.children"
    />
  </el-submenu>
  <Leaf
    v-else
    :index="index"
    :disabled="disabled"
    :label="label"
    :icon="icon"
  />
</template>
<script>
import { MyIcon } from '@theme'
import { defineAsyncComponent, defineComponent } from 'vue'
import Leaf from './Leaf.vue'

export default defineComponent({
  name: 'SidebarBranch',
  components: {
    SubBranch: defineAsyncComponent(() => import('./SubBranch.vue')),
    Leaf,
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
    children: {
      type: Array,
      default() {
        return []
      },
    },
  },
})
</script>
