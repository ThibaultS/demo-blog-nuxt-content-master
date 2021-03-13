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
        <b-nav-text class="title-home"><h1>Toutes mes recettes</h1></b-nav-text>
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
          <b-col>
            <p class="lead mt-4">
              Bienvenue sur mon site ! Chaque semaine, je poste 3 recettes sur
              une thématique et je conclue la semaine en beauté avec un dessert.
              Venez me suivre sur
              <a
                href="https://www.instagram.com/josiesrecipes/"
                target="_blank"
              >
                Instagram
              </a>
              pour les découvrir en avant première.
            </p>
          </b-col>
        </b-row>
        <CategoriesPush />
        <b-row class="content-row">
          <b-col>
            <h2 class="subtitle-home mb-4">Découvrez mes dernières recettes</h2>
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
            <div class="flex items-center">
              <nuxt-link
                to="/2"
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
        'main_ingredient'
      ])
      .sortBy('id', 'desc')
      .where({ published: 1 })
      .limit(30)
      .fetch()
    return {
      articles
    }
  },
  data() {
    return {
      title: 'Mes dernières recettes'
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
