<template>
  <div class="blank-layout">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BlankLayout',
})
</script>
