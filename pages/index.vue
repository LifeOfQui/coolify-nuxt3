<script setup lang="ts">
useHead({ title: 'w.e.b.' })

const exampleCards = [
  {
    imgName: 'zusammenarbeit',
    imgType: 'jpg',
    title: 'Kundenorientierte Zusammenarbeit',
    iconName: 'check-icon',
    width: '1200',
    height: '675'
  },
  {
    imgName: 'agile-entwicklung',
    imgType: 'jpg',
    title: 'Agile Entwicklung',
    iconName: 'check-icon',
    width: '1200',
    height: '800'
  },
  {
    imgName: 'loesungen',
    imgType: 'jpg',
    title: 'Innovative und benutzerfreundliche Lösungen',
    iconName: 'check-icon',
    width: '1200',
    height: '800'
  },
  {
    imgName: 'support',
    imgType: 'jpg',
    title: 'Wartung und Support',
    iconName: 'check-icon',
    width: '1200',
    height: '470'
  }
]
</script>

<template>
  <main style="scroll-margin-top: 65px">
    <section id="scroll-to-leistungen">
      <div class="text-container">
        <h2 class="title-leistungen">
          Unsere Kunden: Branchenführer und erfolgreiche Unternehmen
        </h2>
        <p class="text-leistungen">
          Als Softwareentwickler bietet die w.e.b. Leistungen im Bereich der
          gesamten Prozesskette eines Projektes. So helfen unsere Spezialisten bei
          der Definition Ihrer Anforderungen ebenso wie beim späteren Betrieb und
          Rollout Ihrer Software.
        </p>
      </div>
    </section>
    <section class="checklist-container">
      <h2 class="title">
        Individualsoftware, die genau zu Ihnen passt
      </h2>
      <div class="examples">
        <lazy-example-card
          v-for="item in exampleCards"
          :key="item"
          v-bind="item"
        />
      </div>
    </section>
  </main>
</template>

<style lang="less" scoped>
main {
  --font-text: 16px;

  @media(min-width: 768px) {
    --font-text: 16px;
  }

  @media(min-width: 1024px) {
    --font-text: 18px;
  }
}

.text-container {
  max-width: 90%;
  margin: 0 auto 0;

  @media (max-width: 600px) {
    max-width: 100%;

    .title-leistungen, p.text-leistungen {
      text-align: left;
      max-width: 100%;
    }
  }

  .title-leistungen, .text-leistungen {
    margin-top: 0;
    margin-bottom: 0;
  }

  .text-leistungen {
    max-width: 80%;
    font-size: var(--font-text);
    text-align: center;
    margin: auto
  }
}

@media (max-width: 375px) {
  .title-leistungen {
    margin-top: 48px;
  }

  .text-leistungen {
    margin-bottom: 90px;
  }

  .card__container-main {
    grid-template-columns: 100%;
    grid-row-gap: 16px;
  }

  .cooperation {
    margin-bottom: 44px;
  }
}

.examples {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
