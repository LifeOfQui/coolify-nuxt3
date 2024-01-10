<script setup lang="ts">
import TheNavbar from '~/components/TheNavbar.vue'

const smallNavOpen = ref<boolean>(false)
</script>

<template>
  <div class="layout">
    <the-navbar :small-nav-open="smallNavOpen" @open-small-nav="smallNavOpen = true" />
    <slot />
  </div>
</template>

<style lang="less">
.slide-enter-active {
  transition: all 0.5s ease-out;
}

.slide-leave-active {
  transition: all 0.5s ease-in;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

* {
  box-sizing: border-box;
}

.layout {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.no-scroll {
  overflow: hidden;
}

.card-container {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>
