<template>
  <article
    class="flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"
  >
    <div class="relative lg:w-1/2 xs:w-full xs:h-screen lg:h-full post-left">
      <img
        :src="article.img"
        :alt="article.alt"
        class="absolute h-full w-full object-cover"
      />
      <div class="overlay"></div>
      <div class="absolute top-32 left-32 text-white">
        <NuxtLink to="/"><Logo /></NuxtLink>
      </div>
      <div class="flex absolute top-3rem right-3rem">
        <a
          href="https://www.instagram.com/josiesrecipes/"
          target="_blank"
          class="self-center text-white font-bold hover:underline"
        >
          Instagram
        </a>
        <AppSearchInput class="ml-8" />
      </div>
    </div>
    <div
      class="relative xs:py-8 xs:px-8 lg:py-16 lg:px-16 lg:w-1/2 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll"
    >
      <h1>{{ article.title }}</h1>
      <nuxt-content :document="article" />
      <p>
        <a :href="article.url" target="_blank">
          <span class="icon icon-instagram"></span>
        </a>
      </p>
      <p class="pt-2">{{ article.date }}</p>
    </div>
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      prev,
      next
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
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
