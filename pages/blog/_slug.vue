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
        <StickyValentineArticle />
        <p v-if="article.description" class="lead">
          {{ article.description }}
        </p>
        <p v-if="article.veggie">
          Cette recette est végétarienne.
          <a href="/categories/vegetarien">
            Découvrez toutes mes recettes végératienne.
          </a>
        </p>
        <nuxt-content :document="article" />
        <p v-if="article.url">
          <a :href="article.url" target="_blank">
            <span class="icon icon-instagram"></span>
          </a>
        </p>
        <p class="pt-2">{{ article.date }}</p>
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
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Retrouvez sur mon site toutes les recettes que j'ai publiées sur mon compte instagram @josiesrecipes"
        },
        {
          property: 'og:title',
          content: this.article.title
        },
        {
          property: 'og:image',
          content: this.article.img
        },
        {
          property: 'og:type',
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
