<template>
  <content>
    <section
      id="hero-background"
      class="hero startpage is-medium is-bold is-fullheight-with-navbar is-spaced"
    >
      <div class="hero-body startpage">
        <div style="max-width: 700px" class="container has-text-centered">
          <h1 id="title" class="title">
            Ein Universum voller Fragen und Antworten erforschen.
          </h1>
        </div>
      </div>
    </section>
    <NewsList />
    <Donation />
    <Contact class="is-hidden-mobile" />
    <Sponsors />
  </content>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import NewsList from '~/components/NewsList.vue'
import Sponsors from '~/components/Sponsors.vue'
import Contact from '~/components/Contact.vue'
import Donation from '~/components/Donation.vue'

@Component({
  components: {
    NewsList,
    Sponsors,
    Contact,
    Donation
  },
  head () {
    return {
      title: 'Schülerforschungszentrum Saarlouis',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Das Schülerforschungszentrum bietet allen Schülerinnen und Schülern einen Ort, wo sie als ganze Klasse Workshops an selbst gewählten Themen aus dem MINT-Bereich unterstützt forschen können.'
        }
      ],
      script: [{
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Schülerforschungszentrum Saarlouis',
          email: 'info(at)sfz-sls.de',
          url: 'https://sfz-sls.de/',
          logo: 'https://sfz-sls.de/logo.png'
        }),
        type: 'application/ld+json'
      }]
    }
  }
})
export default class Startpage extends Vue {}
</script>
