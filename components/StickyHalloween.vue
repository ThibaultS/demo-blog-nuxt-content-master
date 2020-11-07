<template>
  <b-row>
    <b-col>
      <b-card class="push-category push-halloween mb-4 text-center">
        <b-card-title title-tag="h2"> Desserts pour Halloween</b-card-title>
        <b-card-text class="lead">
          Découvrez tous les desserts que j'ai préparés spécialement pour
          Halloween.
        </b-card-text>
        <nuxt-link
          role="button"
          target="_self"
          to="/categories/halloween"
          variant="primary"
          class="btn btn-outline-light"
        >
          Découvrir
        </nuxt-link>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
export default {}
</script>
