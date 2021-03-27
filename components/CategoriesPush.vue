<template>
  <div>
    <b-row>
      <b-col>
        <h2 class="subtitle-home mb-2">
          Mes recettes pour les grandes occasions
        </h2>
        <!-- <AppSearchInput /> -->
      </b-col>
    </b-row>
    <!-- <StickyValentine /> -->
    <b-row class="row-cols-1 row-cols-sm-4 row-cols-lg-4 mb-4">
      <b-col class="mb-2">
        <nuxt-link
          class="text-center card push-category btn-category push-easter push-event"
          to="categories/paques"
        >
          <b-card-body>
            <b-card-title title-tag="h3">
              Mes desserts pour <strong>Pâques</strong>
            </b-card-title>
          </b-card-body>
        </nuxt-link>
      </b-col>
      <b-col class="mb-2">
        <nuxt-link
          class="text-center card push-category btn-category push-valentin push-event"
          to="categories/saint-valentin"
        >
          <b-card-body>
            <b-card-title title-tag="h3">
              Mes desserts pour la <strong>Saint-Valentin</strong>
            </b-card-title>
          </b-card-body>
        </nuxt-link>
      </b-col>
      <b-col class="mb-2">
        <nuxt-link
          class="text-center card push-category btn-category push-halloween"
          to="categories/halloween"
        >
          <b-card-body>
            <b-card-title title-tag="h3">
              Mes desserts pour <strong>Halloween</strong>
            </b-card-title>
          </b-card-body>
        </nuxt-link>
      </b-col>
      <b-col class="mb-2">
        <nuxt-link
          class="text-center card push-category btn-category push-christmas"
          to="categories/noel"
        >
          <b-card-body>
            <b-card-title title-tag="h3">
              Mon calendrier de l'avent de recettes <strong>2020</strong>
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
