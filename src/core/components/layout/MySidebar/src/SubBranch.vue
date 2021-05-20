<template>
  <template v-if="children?.length > 0">
    <Branch
      :index="`${index}`"
      :disabled="disabled"
      :label="label"
      :icon="icon"
      :children="children"
    />
  </template>
  <template v-else>
    <Leaf
      :index="`${index}`"
      :disabled="disabled"
      :label="label"
      :icon="icon"
    />
  </template>
</template>
<script>
import { defineComponent } from 'vue'
import Branch from './Branch.vue'
import Leaf from './Leaf.vue'

export default defineComponent({
  name: 'SidebarSubBranch',
  components: {
    Branch,
    Leaf,
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
