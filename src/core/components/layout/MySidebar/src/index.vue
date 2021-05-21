<template>
  <el-menu
    class="my-sidebar"
    :collapse="sidebarCollapsed"
    :default-active="$route.path"
    background-color="var(--color-sidebar-background-color)"
    text-color="var(--color-sidebar-text-color)"
    active-text-color="var(--color-sidebar-active-text-color)"
    @open="handleOpen"
    @close="handleClose"
    unique-opened
    router
  >
    <template v-for="branch in sidebarTree" :key="branch.path">
      <el-menu-item index="/" v-if="branch?.type === 'logo'" class="h-16">
        <transition name="el-fade-in">
          <img
            v-if="sidebarCollapsed"
            src="/img/logo/logo-light.svg"
            class="w-auto h-7 inline-block"
          />
          <img
            v-else
            src="/img/logo/logo-title-light.svg"
            class="w-auto h-8 inline-block"
          />
        </transition>
      </el-menu-item>
      <hr v-else-if="branch?.type === 'line'" class="border-primary-400" />
      <div v-else-if="branch?.type === 'block'" :class="[branch.class]" />
      <el-menu-item-group v-if="branch?.type === 'group'">
        <template #title>
          <span class="uppercase">{{ branch.groupTitle }}</span>
        </template>
        <Branch
          v-for="groupedBranch in branch.groupChildren.filter(
            (item) => item.options
          )"
          :key="groupedBranch.path"
          :index="groupedBranch.path"
          :disabled="groupedBranch?.options?.disabled"
          :label="groupedBranch?.options?.label"
          :icon="groupedBranch?.options?.icon"
          :children="groupedBranch?.children"
        />
      </el-menu-item-group>
      <Branch
        v-else-if="branch?.type === 'route'"
        :index="branch?.route?.path"
        :disabled="branch?.route?.options?.disabled"
        :label="branch?.route?.options?.label"
        :icon="branch?.route?.options?.icon"
        :children="branch?.route?.children"
      />
    </template>
    <Leaf
      @click="togleSidebarCollapse"
      :label="'Collapse sidebar'"
      :icon="{ type: 'fa', class: 'far fa-caret-square-left' }"
      index="#"
    />
  </el-menu>
</template>

<script>
import { sidebarTree } from '@/router'
import { rootMutations } from '@/store/enums'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import Branch from './Branch.vue'
import Leaf from './Leaf.vue'

export default defineComponent({
  name: 'MyElSidebar',
  components: {
    Branch,
    Leaf,
  },
  setup() {
    const { state, commit } = useStore()

    const sidebarCollapsed = computed(() => state.options.sidebarCollapsed)
    const togleSidebarCollapse = () => {
      commit(rootMutations.TOGGLE.SIDEBAR_COLLAPSE)
    }

    return { sidebarCollapsed, togleSidebarCollapse, sidebarTree }
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
$--width-sidebar: 240px;

.my-sidebar {
  min-height: 100vh;

  @apply shadow-md;
  .el-menu-item-group {
    @apply mb-8;
  }

  .el-menu-item {
    @apply text-center;
    .el-menu__title-inner {
      @apply ml-2;
    }
  }
  .el-submenu__title {
    @apply text-center;
    .el-menu__title-inner {
      @apply hidden;
    }
  }

  .el-menu--popup {
    .el-menu-item {
      @apply text-left;
    }
  }

  .el-menu-item-group__title,
  .el-submenu__icon-arrow {
    @apply hidden;
  }

  &:not(.el-menu--collapse) {
    width: $--width-sidebar;

    .el-menu-item,
    .el-submenu__title {
      @apply text-left;
      .el-menu__title-inner {
        @apply inline-block ml-5;
      }
    }

    .el-menu-item-group__title {
      @apply block;
    }
    .el-submenu__icon-arrow {
      @apply inline-block;
    }
  }
}
</style>
