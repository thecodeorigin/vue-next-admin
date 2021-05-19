<template>
  <div class="mobile-layout">
    <!-- Slot is required -->
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MobileLayout',
})
</script>
