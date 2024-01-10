<script setup lang="ts">
const emit = defineEmits(['openSmallNav'])
defineProps({ smallNavOpen: { type: Boolean } })

const navEl: Ref<Element | null> = ref(null)
const navHasScrolled = ref(false)

onMounted(() => {
  const scrollWatcher = document.createElement('div')
  scrollWatcher.setAttribute('data-scroll-watcher', '')
  navEl.value!.before(scrollWatcher)

  const navObserver = new IntersectionObserver((entries) => {
    navHasScrolled.value = !entries[0].isIntersecting
  }, { rootMargin: '50px 0px 0px 0px' })

  navObserver.observe(scrollWatcher)
})

</script>

<template>
  <header ref="navEl" :class="{sticking: navHasScrolled}">
    <div class="nav-content">
      <NuxtLink class="logo" to="/">
        <img
          v-show="navHasScrolled"
          width="1810"
          height="209"
          src="~/assets/images/web-logo.png"
          alt="w.e.b. Logo"
        />
        <img
          v-show="!navHasScrolled"
          width="800"
          height="94"
          src="~/assets/images/web-logo-transparent.png"
          alt="w.e.b. Logo"
        />
      </NuxtLink>
      <nav class="navbar">
        <button
          aria-label="Toggle Navbar"
          :style="{'visibility' : smallNavOpen ? 'hidden' : 'visible'}"
          class="navbar__hamburger"
          @click="emit('openSmallNav')"
        >
          <svg width="32" height="32" viewBox="0 0 15 15">
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12ZM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Zm0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </div>
  </header>
</template>

<style lang="less" scoped>
:root {
  --primaryColor: #004884;
  --secondaryColor: #105da6;
  --tertiaryColor: #2E92FA;
  --overlayBackgroundColor: rgba(0, 72, 132, 0.6);
  --overlayBackgroundColorTransparent: rgba(0, 72, 132, 0.2);
  --bodyBackgroundColor: #F7F8F8;
  --footerBackgroundColor: #1E416E;
  --cardShadow: #1E416E29;
  --lightColor: #ffffff;
  --darkColor: #000000;

  --sideSpace: 8vw;
  --topSpace: 124px;
  --bottomSpace: 124px;

  --maxWidth: 1200px;

  @media(max-width: 600px) {
    --topSpace: 64px;
    --bottomSpace: 64px;
  }
}

header {
  width: 100%;
  top: 0;
  position: fixed;
  z-index: 3;
  padding: 11px var(--sideSpace) 10px;
  transition: background-color .3s ease-in-out;

  &.sticking{
    background-color: var(--lightColor);

    & a {
      color: var(--darkColor)
    }

    & path {
      fill: var(--darkColor)
    }
  }
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  background-color: transparent;
  width: 100%;
  max-width: var(--maxWidth);
}

.navbar {
  display: flex;

  &__hamburger {
    display: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
}

.navigation {
  display: flex;

  &__item {
    list-style: none;
    margin-right: 44px;
    opacity: .9;
    position: relative;
    padding-bottom: 2px;
    transition: opacity .2s linear;

    a {
      align-items: center;
      text-decoration: none;
      font-size: 15px;
      color: var(--lightColor);
    }

    &:has(> a.active) {
      opacity: 1;
    }

    &:hover, &:has(> a.active){
      &::before {
        width: 100%;
        opacity: 1;
      }
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      border-bottom: solid 2px var(--secondaryColor);
      width: 0;
      opacity: .9;
      transition: all .2s linear;
    }
  }

  &__item:last-of-type {
    margin-right: 0;
  }
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;

  img {
    height: 24px;
    width: 204px;
  }
}

@media (max-width: 1000px) {
  .navigation, .navbar__contact {
    display: none;
  }

  .navbar__hamburger {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 44px;
    min-height: 44px;
  }
}

@media (max-width: 375px) {
}
</style>
