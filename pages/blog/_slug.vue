<template>
  <article>
    <b-navbar type="dark" class="customnav navbar-default sticky-top pt-1 pb-6">
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
    <div
      class="flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"
    >
      <div class="relative lg:w-1/2 xs:w-full xs:h-screen lg:h-full post-left">
        <img
          :src="article.img"
          :alt="article.alt"
          class="absolute h-full w-full object-cover"
        />
        <div class="overlay"></div>
      </div>
      <div
        class="relative xs:py-8 xs:px-8 lg:py-32 lg:px-16 lg:w-1/2 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll"
      >
        <h1>{{ article.title }}</h1>
        <p v-if="article.description" class="lead">
          {{ article.description }}
        </p>
        <b-card class="mb-3 bg-secondary">
          <div v-if="article.veggie">
            Cette recette est végétarienne.
            <a href="/categories/vegetarien">
              Découvrez toutes mes recettes végératienne.
            </a>
          </div>
          <div v-if="article.sweety_salty">Recette sucrée-salée</div>
          <div v-if="article.country">Origine : {{ article.country }}</div>
          <div v-if="article.difficulty">
            Difficulté : {{ article.difficulty }}
          </div>
          <div v-if="article.time">
            Temps de préparation et cuisson : {{ article.time }} min
          </div>
          <div v-if="article.recipeYield">
            Quantité : pour {{ article.recipeYield }}
          </div>
        </b-card>
        <nuxt-content :document="article" />
        <p v-if="article.url">
          <a :href="article.url" target="_blank">
            <span class="icon icon-instagram"></span>
          </a>
        </p>
        <StickyValentineArticle />
        <p class="pt-2">Publié le {{ formatDate(article.date) }}</p>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return {
      article
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('fr', options)
    }
  },
  head() {
    return {
      title: this.article.title,
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'Recipe',
            name: this.article.title,
            url: 'https://josies-recipes.netlify.app/blog/' + this.article.slug,
            image: this.article.thumbnail,
            author: {
              '@type': 'Person',
              name: 'Josie'
            },
            datePublished: this.article.date,
            description: this.article.description,
            totalTime: 'PT' + this.article.time + 'M'
          }
        }
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.article.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.article.img
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: this.article.img
        }
      ]
    }
  }
}
</script>
<style>
.nuxt-content p {
  margin-bottom: 20px;
}
.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  background-color: transparent;
}
</style>
