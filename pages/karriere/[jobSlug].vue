<script setup lang="ts">
import jobs from '~/data/jobs.json'

definePageMeta({
  middleware: [
    function ({ params }) {
      if (!jobs.find(job => job.url === params.jobSlug)) {
        return abortNavigation(
            createError({
              statusCode: 404,
              message: 'Page not found'
            })
        )
      }
    }
  ]
})

const route = useRoute()
const { jobSlug } = route.params

const job: Job | undefined = jobs.find((job: Job) => job.url === jobSlug)
const pageTitle = ref<string>(job!.name)

useHead({ title: `w.e.b. Software | ${pageTitle.value}` })

</script>

<template>
  <div style="margin-top: 100px">
    <main>
      <section>
        <h1>{{job.name}}</h1>
          <div class="job-description">
            <p>{{ job.beschreibung }}</p>
            <div class="job-description__team">
              <h3>Your Team</h3>
              <p>
                Our team is based is Germany and we would like to extend with 3 additional colleagues who will be
                working
                remotely. We want you to integrate easily so there will be visits on site and team building events. <br>
                <br>
                There is
                a high possibility to expand the remote team and to open an office in the future.
              </p>
            </div>
          </div>

          <div class="job-requirements">
            <div class="job-requirements__must-have">
              <h3>Must have:</h3>
              <ul>
                <li v-for="anforderung in job.anforderungen" :key="anforderung">
                  <span>{{ anforderung }}</span>
                </li>
              </ul>
            </div>
            <div class="job-requirements__nice-to-have">
              <h3>Nice to have:</h3>
              <ul>
                <li v-for="nth in job.niceToHave" :key="nth">
                 <span>{{
                    nth
                  }}</span>
                </li>
              </ul>
            </div>
          </div>


          <div class="company-description">
            <p>
              Unser Unternehmen wurde 1993 gegründet und hat sich seitdem zu einem Spezialisten für Java
              Softwareentwicklung entwickelt. Mit unserem Sitz in Ingolstadt sind wir mitten in Bayern verwurzelt und
              profitieren von der starken Wirtschaft in der Region. Unser Team besteht aus 25 Experten, die sich auf die
              Entwicklung von Webanwendungen und Apps spezialisiert haben. <br><br> Unsere Vision ist es, zu einem
              führenden
              Anbieter von benutzerfreundlicher Software zu werden, der für unsere Kunden weltweit die beste Wahl ist.
              Wir
              sind stets darum bemüht, durch unsere Leidenschaft und Innovation neue Maßstäbe in der Softwareentwicklung
              zu setzen und unseren Kunden bei der Erreichung ihrer Ziele zu unterstützen. <br><br> Wir legen großen
              Wert auf eine
              enge Zusammenarbeit und regelmäßige Kommunikation mit unseren Kunden, um sicherzustellen, dass die von uns
              entwickelte Software den Erwartungen entspricht und den Bedürfnissen unserer Kunden gerecht wird. Durch
              unsere technische Expertise und die Verwendung agiler Entwicklungsmethoden sind wir in der Lage, schnell
              auf
              Veränderungen und Anpassungen zu reagieren und eine laufende Optimierung der Software zu gewährleisten.
            </p>

          </div>
      </section>

      <section>
        <h2>Weitere Stellenangebote</h2>
        <div class="card-container">
          <template v-for="(j, i) in jobs.filter(j => j.url !== job.url)" :key="j.url">
            <job-card v-if="i <= 1" :job="j" />
          </template>
        </div>
        <button @click="navigateTo('/karriere')">
          View all jobs <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path
            fill="#2E92FA"
            d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
        /></svg></span>
        </button>
      </section>
    </main>
  </div>
</template>

<style scoped lang="less">
.card-container {
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
}

.basic-card-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

p {
  margin: 0;
}

.job-description {
  display: flex;
  flex-direction: column;
  gap: 32px;

  &__team {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

.job-requirements {
  display: flex;
  flex-direction: column;
  gap: 32px;

  &__must-have, &__nice-to-have {
    display: flex;
    flex-direction: column;
    gap: 24px;

    ul {
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 24px;

      li {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 16px;

        img {
          width: 18px;
        }
      }
    }
  }
}

.company-description {
  display: flex;
  gap: 42px;
  align-items: flex-start;

  .meeting-room {
    position: relative;
    max-height: 600px;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--overlayBackgroundColor);
    }

    img {
      max-height: 600px;
    }

    @media (max-width: 1200px) {
      display: none;
    }
  }
}

button {
  width: fit-content;
  align-self: center;
  display: flex;
  align-items: center;
  gap: 4px;
  border: none;
  background-color: transparent;
  color: var(--tertiaryColor);
  font-variation-settings: "wght" 600, "wdth" 100;
}
</style>
