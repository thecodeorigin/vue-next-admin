<template>
  <div class="unauth-layout">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'UnauthLayout',
})
</script>
<style lang="scss" scoped>
.unauth-layout {
  overflow: hidden;
  background-color: var(--color-theme-3);
  background-image: url('/img/bg-green.svg');
  background-position: center;
  background-size: cover;
  background-blend-mode: soft-light;
}
</style>
