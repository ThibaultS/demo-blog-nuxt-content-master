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
            <h1>Mes recettes végétariennnes</h1>
            <p class="lead">
              Je vous propose des recettes sans viande et sans poisson qui font
              la part-belle à des légumes ou des fruits (souvent un fromage).
              Pour découvrir mes nouvelles recettes suivez-moi sur
              <a
                href="https://www.instagram.com/josiesrecipes/"
                target="_blank"
              >
                Instagram.
              </a>
            </p>
          </b-col>
        </b-row>
        <b-row
          id="posts"
          class="row-cols-1 row-cols-sm-1 row-cols-lg-1 row-cols-xl-2"
        >
          <b-col v-for="article of articles" :key="article.slug" class="mb-5">
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
                      <p class="lead">{{ article.description }}</p>
                      <p class="mt-3">{{ article.date }}</p>
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
        'event',
        'category',
        'veggie',
        'theme'
      ])
      .sortBy('id', 'desc')
      .where({ veggie: 1 })
      .fetch()
    return {
      articles
    }
  },
  data() {
    return {
      title: 'Mes recettes végétariennnes'
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
            'https://res.cloudinary.com/thibaults/image/upload/v1606424631/partage-home.png'
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
