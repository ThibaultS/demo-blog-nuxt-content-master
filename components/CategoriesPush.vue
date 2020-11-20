<template>
  <div>
    <b-row>
      <b-col>
        <h2 class="subtitle-home mb-4">Recherchez une recette</h2>
        <!-- <AppSearchInput /> -->
      </b-col>
    </b-row>
    <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-4 mb-8">
      <b-col class="mb-2">
        <nuxt-link
          class="text-center card push-category push-chocolat"
          to="categories/chocolat"
        >
          <b-card-body>
            <b-card-title title-tag="h3">
              Mes desserts au <strong>chocolat</strong>
            </b-card-title>
          </b-card-body>
        </nuxt-link>
      </b-col>
      <b-col class="mb-2">
        <nuxt-link
          class="text-center card push-category push-pates"
          to="categories/pates"
        >
          <b-card-body>
            <b-card-title title-tag="h3">
              Mes recettes de <strong>pâtes</strong>
            </b-card-title>
          </b-card-body>
        </nuxt-link>
      </b-col>
      <b-col class="mb-2">
        <nuxt-link
          class="text-center card push-category push-poisson"
          to="categories/poissons-et-crustaces"
        >
          <b-card-body>
            <b-card-title title-tag="h3">
              Mes recettes de <strong>poissons et crustacés</strong>
            </b-card-title>
          </b-card-body>
        </nuxt-link>
      </b-col>
      <b-col class="mb-2">
        <nuxt-link
          class="text-center card push-category push-halloween"
          to="categories/halloween"
        >
          <b-card-body>
            <b-card-title title-tag="h3">
              Mes desserts pour <strong>Halloween</strong>
            </b-card-title>
          </b-card-body>
        </nuxt-link>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {}
</script>
