<template>
  <el-container class="default-layout">
    <MySidebar />
    <el-container direction="vertical">
      <MyNavbar v-wave />
      <slot />
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent } from 'vue'
import { MyNavbar, MySidebar } from '@/core/components/layout'
export default defineComponent({
  name: 'DefaultLayout',
  components: { MyNavbar, MySidebar },
})
</script>
