<template>
  <div>
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
        <b-row class="mb-2">
          <b-col>
            <h1>Les recettes de Josie - page 2</h1>
          </b-col>
        </b-row>
        <b-row class="row-cols-1">
          <div class="mb-4 ads-container col">
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
        <b-row
          id="posts"
          class="row-cols-1 row-cols-sm-1 row-cols-lg-1 row-cols-xl-2"
        >
          <b-col v-for="article of articles" :key="article.slug" class="mb-3">
            <b-card class="post horizontal" no-body>
              <NuxtLink
                :to="{ name: 'blog-slug', params: { slug: article.slug } }"
              >
                <b-row>
                  <b-col md="5">
                    <div class="img-container">
                      <b-card-img-lazy
                        :src="article.thumbnail"
                        left
                        blank-color="#d0b8ac"
                        loading="lazy"
                        alt=""
                      >
                      </b-card-img-lazy>
                    </div>
                  </b-col>
                  <b-col md="7">
                    <b-card-body>
                      <b-card-title title-tag="h3">
                        {{ article.title }}
                      </b-card-title>
                      <p class="lead mb-3">{{ article.description }}</p>
                      <div class="infos-card">
                        <div v-if="article.veggie">
                          <i class="fas fa-seedling"></i>
                          Recette végétarienne
                        </div>
                        <div v-if="article.country">
                          <i class="fas fa-globe-americas"></i>
                          {{ article.country }}
                        </div>
                        <div v-if="article.difficulty">
                          <i class="fas fa-check-double"></i>
                          {{ article.difficulty }}
                        </div>
                        <div v-if="article.time">
                          <i class="fas fa-stopwatch"></i>
                          {{ article.time }} min
                        </div>
                      </div>
                    </b-card-body>
                  </b-col>
                </b-row>
              </NuxtLink>
            </b-card>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="flex items-center">
              <nuxt-link
                to="/3"
                class="flex-1 py-2 px-4 rounded mb-5 text-center see-more"
              >
                Voir plus de recettes
              </nuxt-link>
            </div>
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
        'published',
        'theme',
        'main_ingredient',
        'time',
        'difficulty',
        'country',
        'veggie',
        'sweety_salty'
      ])
      .sortBy('id', 'desc')
      .where({ published: 1 })
      .skip(10)
      .limit(50)
      .fetch()
    return {
      articles
    }
  },
  data() {
    return {
      title: 'Toutes mes recettes - Page 2'
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
            "Retrouvez sur mon site toutes les recettes que j'ai publiées sur mon compte instagram @josiesrecipes"
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://res.cloudinary.com/thibaults/image/upload/v1606424632/partage-home.png'
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
