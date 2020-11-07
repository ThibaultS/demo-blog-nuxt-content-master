<template>
  <div class="halloween">
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
            <h1>Halloween</h1>
            <p class="lead">
              Retrouvez la liste de toutes les recettes que j'ai préparées
              spécialement pour Halloween.
            </p>
          </b-col>
        </b-row>
        <b-row class="content-row">
          <b-col>
            <b-card
              v-for="article of articles"
              :key="article.slug"
              class="post mb-5"
              no-body
            >
              <NuxtLink
                :to="{ name: 'blog-slug', params: { slug: article.slug } }"
              >
                <b-row no-gutters>
                  <div class="img-halloween-container">
                    <b-card-img-lazy
                      :src="article.thumbnail"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <b-card-body>
                    <b-card-title title-tag="h2">
                      {{ article.title }}
                    </b-card-title>
                    <p>{{ article.description }}</p>
                  </b-card-body>
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
        'category'
      ])
      .sortBy('id', 'desc')
      .where({ category: 'Halloween' })
      .fetch()
    return {
      articles
    }
  },
  data() {
    return {
      title: 'Halloween'
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
