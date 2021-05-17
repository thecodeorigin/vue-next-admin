<template>
  <el-container class="default-layout">
    <Sidebar />
    <el-container direction="vertical">
      <Navbar v-wave />
      <slot />
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent } from 'vue'
import { Navbar, Sidebar } from '@/core/components/layout'
export default defineComponent({
  name: 'DefaultLayout',
  components: {
    Navbar,
    Sidebar,
  },
})
</script>
