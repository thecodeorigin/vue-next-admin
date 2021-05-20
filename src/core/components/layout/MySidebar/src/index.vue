<template>
  <el-menu
    default-active="2"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <Branch
      v-for="(branch, index) in sidebarTree.filter((item) => item.options)"
      :key="branch.name"
      :index="index"
      :disabled="branch?.options?.disabled"
      :label="branch?.options?.label"
      :icon="branch?.options?.icon"
      :children="branch?.children"
    />
  </el-menu>
</template>

<script>
import { sidebarTree } from '@/router'
import { defineComponent, ref } from 'vue'
import Branch from './Branch.vue'

export default defineComponent({
  name: 'MyElSidebar',
  components: {
    Branch,
  },
  setup() {
    const isCollapse = ref(false)
    console.log(sidebarTree)

    return { isCollapse, sidebarTree }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
})
</script>

<style lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
}
.el-menu-item,
.el-submenu__title {
  span {
    @apply ml-2;
  }
}
</style>
