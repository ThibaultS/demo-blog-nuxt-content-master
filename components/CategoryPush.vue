<template>
  <b-col class="mb-2">
    <b-card
      class="push-category push-event push-christmas mb-4 pt-2 pb-2 text-center"
    >
      <b-card-title title-tag="h3">
        Mon calendrier de l'avent 2021
      </b-card-title>
      <b-card-text class="lead">
        Cette année encore, je vous propose 24 recettes en 24 jours pour vous
        donner plein d'idées pour vos repas de noël. Chaque jour, découvrez une
        nouvelle recette.
      </b-card-text>
      <nuxt-link
        role="button"
        target="_self"
        to="/categories/noel-2021"
        class="link"
      >
        Découvrir
      </nuxt-link>
    </b-card>
    <!-- <nuxt-link
      class="text-center card push-category btn-category"
      to="categories/novembre-2021"
    >
      <b-card-body>
        <b-card-title title-tag="h3">
          Ma sélection de 10 recettes pour le mois de <strong>novembre</strong>
        </b-card-title>
      </b-card-body>
    </nuxt-link> -->
  </b-col>
</template>
<script>
export default {}
</script>
