<template>
  <el-menu
    class="el-menu-vertical sidebar"
    :collapse="isCollapse"
    :default-active="$route.path"
    background-color="var(--color-sidebar-background-color)"
    text-color="var(--color-sidebar-text-color)"
    active-text-color="var(--color-sidebar-active-text-color)"
    @open="handleOpen"
    @close="handleClose"
    unique-opened
    router
  >
    <Branch
      v-for="branch in sidebarTree.filter((item) => item.options)"
      :key="branch.path"
      :index="branch.path"
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
.el-menu-vertical:not(.el-menu--collapse) {
  width: 240px;
  min-height: 100vh;

  .el-menu-item,
  .el-submenu__title {
    span {
      @apply ml-2;
    }
  }
}
</style>
