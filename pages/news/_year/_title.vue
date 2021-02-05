<template>
  <div id="hero-background" class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div v-if="htmlContent != null" class="container">
        <section class="articles">
          <div class="column is-8 is-offset-2">
            <div class="card article">
              <div class="card-content">
                <div class="columns">
                  <div class="column is-8 is-offset-2">
                    <b-image
                      :src-fallback="require('@/assets/background.jpg')"
                      :src="image"
                      ratio="16by9"
                    />
                  </div>
                </div>
                <div class="media">
                  <div class="media-content has-text-centered">
                    <p class="title article-title">
                      {{ $route.params.title }}
                    </p>
                    <div class="tags has-addons level-item">
                      <b-tag type="is-info" rounded>
                        {{ author }}
                      </b-tag>
                      <b-tag rounded>
                        {{ date }}
                      </b-tag>
                    </div>
                  </div>
                </div>
                <div class="content article-body">
                  <!-- eslint-disable -->
                  <p style="text-align: left" v-html="htmlContent" />
                  <!-- eslint-enable -->
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import snarkdown from 'snarkdown'
import { News } from '~/interfaces/News'

@Component
export default class NewsView extends Vue {
  date: string = '';
  author: string = '';
  image: string = '';
  htmlContent: string = '';

  created () {
    fetch('/news/news.json?time=' + new Date().getTime())
      .then(response => response.json())
      .then(data =>
        data.filter(
          (element: News) => element.title === this.$route.params.title
        )
      )
      .then((data) => {
        this.date = data[0].date
        this.author = data[0].author
        this.image = location.origin + data[0].image
        this.fetchContent(data[0].markdown)
      })
      .then(() => {
        if (this.date === '' || this.author === '') {
          this.sendTo404()
        }
      })
      .catch(() => this.sendTo404())
  }

  public sendTo404 (): void {
    this.$nuxt.error({
      message: 'Der Artikel ' + this.$route.params.title + ' existiert nicht',
      statusCode: 404
    })
  }

  public fetchContent (markdownUrl: string): void {
    fetch(window.location.origin + '/news/' + markdownUrl)
      .then(response => response.text())
      .then((data) => {
        if (data.length !== 0) {
          this.htmlContent = snarkdown(data)
        } else {
          this.sendTo404()
        }
      })
      .catch(() => {
        this.sendTo404()
      })
  }
}
</script>

<style>
#hero-background
  > div
  > div
  > section
  > div
  > div
  > div
  > div.columns
  > div
  > figure
  > img {
  border-radius: 5px;
}
</style>