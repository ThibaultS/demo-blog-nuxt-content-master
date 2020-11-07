<template>
  <b-row class="mb-5">
    <b-col>
      <h2 class="text-center subtitle-home">Mes recettes par catégorie</h2>
      <b-card-group deck>
        <nuxt-link
          class="text-center card push-category push-chocolat"
          to="categories/chocolat"
        >
          <b-card-body>
            <b-card-title title-tag="h3">Chocolat</b-card-title>
          </b-card-body>
        </nuxt-link>
        <nuxt-link
          class="text-center card push-category push-pates"
          to="categories/pates"
        >
          <b-card-body>
            <b-card-title title-tag="h3">Pâtes</b-card-title>
          </b-card-body>
        </nuxt-link>
        <nuxt-link
          class="text-center card push-category push-poisson"
          to="categories/poissons-et-crustaces"
        >
          <b-card-body>
            <b-card-title title-tag="h3">Poissons et crustacés</b-card-title>
          </b-card-body>
        </nuxt-link>
        <nuxt-link
          class="text-center card push-category push-halloween"
          to="categories/halloween"
        >
          <b-card-body>
            <b-card-title title-tag="h3">Halloween</b-card-title>
          </b-card-body>
        </nuxt-link>
      </b-card-group>
    </b-col>
  </b-row>
</template>
<script>
export default {}
</script>
