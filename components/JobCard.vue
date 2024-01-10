<script setup lang="ts">
const props = defineProps<{
  job: { url: string, name: string, time: string, experience: string, remote: string },
  index?: number
}>()

const card = ref(null)

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
  <div
      ref="card"
      class="card"
      :style="`animation-delay: ${.3 + index * .3}s`"
      @click="navigateTo(`/karriere/${job.url}`)"
  >
    <div class="content">
      <div class="header">
        <h3>{{ job.name }}</h3>
        <span>{{ job.time }}</span>
      </div>
      <div class="body">
        <p>{{ job.experience }}</p>
        <p v-if="job.remote">
          Remote
        </p>
      </div>
    </div>
    <button>View & Apply</button>
  </div>
</template>

<style scoped lang="less">
.card {
  width: 100%;
  background-color: var(--lightColor);
  display: flex;
  justify-content: space-between;
  padding: 32px;
  box-shadow: 3px 6px 16px var(--cardShadow);
  flex-direction: column;
  min-height: 220px;
  cursor: pointer;
  gap: 16px;
  opacity: 0;
  transition: all .3s;

  &.visible {
    animation: slideInTop 1.2s ease-out forwards;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;

      @media (max-width: 1000px) {
        flex-direction: column;
        align-items: start;
      }

      span {
        padding: 5px 28px;
        color: var(--tertiaryColor);
        font-variation-settings: "wght" 600, "wdth" 100;
        background-color: rgba(46, 146, 250, .1);
        white-space: nowrap;
      }
    }

    .body {
      display: flex;
      flex-direction: column;
      gap: 8px;

      p {
        margin: 0;
      }
    }
  }

  button {
    align-self: flex-start;
    border: none;
    background-color: transparent;
    color: var(--tertiaryColor);
    font-variation-settings: "wght" 600, "wdth" 100;
    padding: 0;
  }

  &:hover {
    background-color: var(--primaryColor);
    color: var(--lightColor);

    .header {
      h3 {
        color: var(--lightColor)
      }
    }

  }
}

@keyframes slideInTop {
  0% {
    transform: translateY(75px);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

</style>
