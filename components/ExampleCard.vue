<script setup lang="ts">
defineProps<{
    title?: string,
    imgName: string,
    imgType: string,
    iconName?: string,
    width?: string,
    height?: string,
}>()

const card: Ref<Element | null> = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  })
  if (card.value) {
    observer.observe(card.value)
  }
})
</script>

<template>
  <div ref="card" class="card">
    <div class="background-overlay" />
    <h3 class="title">
      {{ title }}
    </h3>
  </div>
</template>

<style lang="less" scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  overflow: hidden;
  padding: 0 56px;
  opacity: 0;
  //cursor: pointer;

  &.visible {
    animation: slideInTop 1.2s ease-out forwards .3s;
  }

  .background-overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: var(--overlayBackgroundColor);
    z-index: 1;
  }

  .icon {
    z-index: 1;
    margin-bottom: 16px;
  }

  h3 {
    z-index: 1;
    color: var(--lightColor);
    font-size: 23px;
    text-align: center;

    @media (max-width: 600px) {
      font-size: 16px;
    }
  }

  .background-image {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .5s ease-out;
  }

  &:hover {
    .background-image {
      transform: scale(1.1);
    }
  }
}

.title {
}
</style>
