<template>
  <div v-cloak>
    <component
      :is="layout"
      :class="{
        dark: isDarkMode,
      }"
    >
      <router-view />
    </component>
    <transition name="el-fade-in">
      <MyLoading v-if="isLoading" />
    </transition>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import {
  LayoutDefault,
  LayoutAuth,
  LayoutUnauth,
  LayoutError,
  LayoutMobile,
} from '@layouts'
// Loading component
import { MyLoading } from '@/core/components/layout'
import { camelCase, startCase } from 'lodash'
import { rootActions } from './store/enums'
// App component
export default defineComponent({
  name: 'App',
  components: {
    LayoutDefault,
    LayoutAuth,
    LayoutUnauth,
    LayoutError,
    LayoutMobile,
    MyLoading,
  },
  provide() {
    return {
      loading: {
        on: () => {
          this.isLoading = true
        },
        off: () => {
          this.isLoading = false
        },
      },
    }
  },
  data() {
    return {
      isDarkMode: false,
      isLoading: false,
    }
  },
  computed: {
    layout() {
      return this.$route.meta.layout
        ? startCase(camelCase('Layout_' + this.$route.meta.layout)).replace(
            / /g,
            ''
          )
        : 'LayoutDefault'
    },
  },
  methods: {
    initiateVueApp() {
      this.$store.dispatch(rootActions.VUE_SERVER_INIT)
    },
    toggleDarkMode() {
      this.isDarkMode = this.isDarkMode ? false : true
    },
  },
  created() {
    this.initiateVueApp()
    // Use busEvent to trigger these listeners
    // bus.emit('toggleDarkMode')
    this.$bus.on('toggleDarkMode', () => {
      this.toggleDarkMode()
    })
  },
})
</script>
