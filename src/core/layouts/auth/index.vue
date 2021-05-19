<template>
  <div class="auth-layout">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AuthLayout',
})
</script>
