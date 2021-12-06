<template>
  <div class="noel">
    <div>
      <b-navbar
        type="dark"
        class="customnav navbar-default sticky-top pt-1 pb-6"
      >
        <b-navbar-brand>
          <nuxt-link to="/">
            <img
              id="josie"
              src="~assets/images/josies-logo-white-v2.svg"
              class="logo pt-2"
              alt="Josie's recipes"
            />
          </nuxt-link>
        </b-navbar-brand>
        <NavItems />
      </b-navbar>
      <b-container fluid="lg" class="animate animate3 slideUp">
        <b-row>
          <b-col class="intro mt-5 mb-3">
            <h1>24 recettes pour mon calendrier de l'avent 2020</h1>
            <p class="lead">
              C'est la meilleure période de l'année ! Chaque jour de décembre,
              retrouvez sur cette page et sur mon compte
              <a
                href="https://www.instagram.com/josiesrecipes/"
                target="_blank"
              >
                Instagram
              </a>
              une recette pour les fêtes de fin d'année.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <div class="mb-4 ads-container">
            <ins
              class="adsbygoogle adsonsite adsonhome"
              style="display: block"
              data-ad-client="ca-pub-4925011117186251"
              data-ad-slot="5914372396"
              data-ad-format="horizontal"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </b-row>
        <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
          <b-col v-for="article of articles" :key="article.slug" class="mb-5">
            <b-card
              class="text-center reveal-calendar"
              :style="{ 'background-image': article.bkg }"
            >
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title title-tag="h2">
                    décembre
                    <span>
                      {{ article.calendrier }}
                    </span>
                  </b-card-title>
                  <b-card-text class="title-recipe">
                    {{ article.title }}
                  </b-card-text>
                  <nuxt-link
                    class="btn btn-secondary"
                    :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                  >
                    Découvrir
                  </nuxt-link>
                </div>
              </div>
            </b-card>
          </b-col>
          <!-- <b-col class="mb-5">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title>jour <span>24</span></b-card-title>
                  <b-card-footer>À venir</b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col> -->
        </b-row>
        <footer>
          <b-row>
            <b-col>
              <b-card
                class="push-category push-event push-christmas mb-4 pt-10 text-center"
              >
                <b-card-title title-tag="h2">
                  Mon calendrier de l'avent 2021
                </b-card-title>
                <b-card-text class="lead">
                  Cette année encore, en 2021, je vous propose 24 recettes en 24
                  jours pour vous donner plein d'idées pour vos repas de noël.
                  Chaque jour, découvrez une nouvelle recette.
                </b-card-text>
                <nuxt-link
                  role="button"
                  target="_self"
                  to="/categories/noel-2021"
                  class="link"
                >
                  Découvrir
                </nuxt-link>
              </b-card>
            </b-col>
          </b-row>
        </footer>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only([
        'id',
        'title',
        'slug',
        'description',
        'img',
        'thumbnail',
        'date',
        'url',
        'category',
        'event',
        'bkg',
        'calendrier',
        'published'
      ])
      .sortBy('id', 'asc')
      .where({ event: 'Noël' })
      .limit(24)
      .fetch()
    return {
      articles
    }
  },
  data() {
    return {
      title: "Calendrier de l'avent 2020"
    }
  },
  mounted() {
    this.showAd()
  },
  methods: {
    showAd() {
      this.show = true
      // console.log('updateAd')

      this.$nextTick(() => {
        try {
          // Once ad container (<ins>) DOM has (re-)rendered, requesst a new advert
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
          // console.log('goof')
        } catch (error) {
          // console.error(error)
        }
      })
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Chaque jour de décembre, découvrez une recette pour les fêtes de fin d'année."
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://res.cloudinary.com/thibaults/image/upload/v1606424633/partage-noel.png'
        }
      ]
    }
  }
}
</script>

<style class="postcss">
.article-card {
  border-radius: 8px;
}
.article-card a {
  background-color: #fff;
  border-radius: 8px;
}
.article-card img div {
  border-radius: 8px 0 0 8px;
}
</style>
