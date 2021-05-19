<template>
  <div class="error-layout">
    <slot />
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'errorPage',
})
</script>
<style lang="scss" scoped>
.error-layout {
  background-color: var(--color-danger-700);
  background-image: url('/img/bg-green.svg');
  background-position: center;
  background-size: cover;
  background-blend-mode: soft-light;
}
</style>
