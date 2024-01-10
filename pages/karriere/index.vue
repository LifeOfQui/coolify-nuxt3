<script setup lang="ts">
import jobs from "../../data/jobs.json"

const pageTitle = ref<string>('Karriere')
useHead({ title: `w.e.b. Software | ${pageTitle.value}` })

const werte = [
  {
    title: 'People-first company culture',
    text: 'Unsere Unternehmenskultur "People-first company culture" bedeutet, dass wir die Bedürfnisse und Anliegen unserer Mitarbeiter und Kunden in den Mittelpunkt stellen und danach handeln. Wir fördern eine Kultur der Offenheit, des Respekts und der Zusammenarbeit, um sicherzustellen, dass wir gemeinsam erfolgreicher sind.'
  }, {
    title: 'Remote work',
    text: 'Unser Wert “Remote work" bedeutet, dass wir unseren Mitarbeitern die Freiheit geben, von jedem Ort aus zu arbeiten und ihre Arbeit so zu erledigen, wie es am besten zu ihrem Leben passt. Wir glauben daran, dass Remote-Arbeit ein wichtiger Bestandteil der modernen Arbeitswelt ist und fördern eine Kultur, die die Vorteile dieser Art von Arbeit voll ausschöpft.'
  }, {
    title: 'Flexibility',
    text: 'In unserem Unternehmen glauben wir, dass Flexibilität der Schlüssel zur Förderung einer gesunden Work-Life-Balance ist und unseren Mitarbeitern ermöglicht, ihre beste Arbeit zu leisten. Wir streben danach, eine flexible Arbeitsumgebung zu schaffen, die persönliches und berufliches Wachstum ermöglicht und gleichzeitig den Bedürfnissen unserer Kunden und Interessengruppen gerecht wird.'
  }, {
    title: 'Challenging projects',
    text: 'Unsere Firma schätzt herausfordernde Projekte, die unser Team fordern, um zu lernen und zu wachsen, während wir innovative Lösungen liefern, die die Erwartungen unserer Kunden übertreffen. Wir glauben daran, eine Umgebung zu schaffen, in der unsere Mitarbeiter gedeihen und sich erfüllt fühlen, indem sie aufregende und herausfordernde Projekte übernehmen.'
  }
]
</script>

<template>
  <div style="margin-top: 100px">
    <main>
      <section>
        <div class="text-container">
          <h2>Entfalte dein volles Potenzial bei w.e.b. - Dein Sprungbrett für eine erfolgreiche IT-Karriere.</h2>
          <p>
            Bei uns steht der Mensch im Mittelpunkt: Wir bieten eine Unternehmenskultur, die sich an den Bedürfnissen
            unserer Mitarbeiter orientiert. Dazu gehören auch Remote-Arbeit und flexible Arbeitszeiten sowie
            herausfordernde Projekte.
          </p>
        </div>
      </section>
      <section>
        <div class="text-container">
        </div>
      </section>
      <section>
        <h2>Unsere aktuellen Stellenangebote</h2>
        <div class="card-container" :class="{single: true}">
          <template v-for="(job, i) in jobs" :key="job.url">
            <job-card :job="job" :index="parseInt(i)"/>
          </template>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped lang="less">
.card-container {
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  &.single {
    display: flex;
    justify-content: center;
  }
}

.text-container {
  p {
    text-align: center;
  }
}

.werte {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .description {
    gap: 24px;

    &__title {
      text-align: left;
      margin: 0;
      color: var(--secondaryColor);
      font-size: 20px;
    }

    &__text {
      font-size: 15px;
      margin: 0;
      text-align: left;
    }
  }
}
</style>
