<template>
  <el-container
    class="default-layout"
    style="height: 500px; border: 1px solid #eee"
  >
    <Sidebar />
    <el-container>
      <Navbar />
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
