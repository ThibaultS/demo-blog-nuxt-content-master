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
        <b-nav-text class="title-home">
          <h1>Mes recettes - page 4</h1>
        </b-nav-text>
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
        <b-row class="content-row">
          <b-col>
            <b-card-group id="posts" columns>
              <b-card
                v-for="article of articles"
                :key="article.slug"
                class="post bg-tertiary"
                no-body
              >
                <NuxtLink
                  :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                >
                  <div class="img-container">
                    <b-card-img-lazy
                      :src="article.thumbnail"
                      top
                      blank-color="#d0b8ac"
                      loading="lazy"
                      fluid
                      alt=""
                    >
                    </b-card-img-lazy>
                  </div>
                  <b-card-body>
                    <b-card-title title-tag="h3">
                      {{ article.title }}
                    </b-card-title>
                    <p>{{ article.date }}</p>
                  </b-card-body>
                </NuxtLink>
              </b-card>
            </b-card-group>
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
        'published'
      ])
      .sortBy('id', 'desc')
      .where({ published: 1 })
      .skip(130)
      .fetch()
    return {
      articles
    }
  },
  data() {
    return {
      title: 'Toutes mes recettes - Page 4'
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
