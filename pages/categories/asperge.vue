<template>
  <div class="category-page">
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
        <NavItems />
      </b-navbar>
      <b-container fluid="lg" class="animate animate3 slideUp">
        <b-row>
          <b-col class="intro mt-5 mb-3">
            <h1>Mes recettes avec des asperges</h1>
            <p class="lead">
              Lorsque la saison des asperges arrivent, je suis la plus heureuse
              du monde. Découvrez ici mes recettes à faire à l'arrivée du
              printemps. Pour découvrir mes nouvelles recettes je vous invite à
              me suivre sur
              <a
                href="https://www.instagram.com/josiesrecipes/"
                target="_blank"
              >
                Instagram
              </a>
              et
              <a target="_blank" href="https://www.facebook.com/josiesrecipes">
                Facebook.
              </a>
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
                          Végétarien
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
      .limit(50)
      .search('asperge')
      .fetch()
    return {
      articles
    }
  },
  data() {
    return {
      title: 'Mes recettes avec des asperges'
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
            'Toutes mes recettes avec des asperges à tester au printemps.'
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
