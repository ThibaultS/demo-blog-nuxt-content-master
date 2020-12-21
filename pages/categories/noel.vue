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
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto pt-2">
          <AppSearchInput />
          <a
            href="https://www.instagram.com/josiesrecipes/"
            target="_blank"
            class="mr-1 ml-3 mt-1 self-center text-white font-bold hover:underline insta-link"
          >
            Instagram
          </a>
        </b-navbar-nav>
      </b-navbar>
      <b-container fluid="lg" class="animate animate3 slideUp">
        <b-row>
          <b-col class="intro mt-5 mb-5">
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
          <b-col class="mb-5">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <!-- Pour le flex align -->
                  <b-card-title>jour <span>22</span></b-card-title>
                  <b-card-footer>À venir</b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-5">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <!-- Pour le flex align -->
                  <b-card-title>jour <span>23</span></b-card-title>
                  <b-card-footer>À venir</b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-5">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <!-- Pour le flex align -->
                  <b-card-title>jour <span>24</span></b-card-title>
                  <b-card-footer>À venir</b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
        </b-row>
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
        'bkg',
        'calendrier',
        'published'
      ])
      .sortBy('id', 'asc')
      .where({ category: 'Noël' })
      .limit(21)
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
