<template>
  <div class="search-container-home mb-2">
    <label class="sr-only" for="search">Recherchez dans mes recettes</label>
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Recherchez une recette"
      class="search-recipes"
    />
    <ul v-if="articles.length" class="search-list-recipes">
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          {{ article.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: []
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content('articles')
        .limit(20)
        .search(searchQuery)
        .fetch()
    }
  }
}
</script>
