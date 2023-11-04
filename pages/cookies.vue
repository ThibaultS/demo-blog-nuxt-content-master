<template>
  <article>
    <b-navbar
      type="dark"
      class="customnav navbar-default sticky-top pt-1 pb-6 container-lg"
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
      <NavItems />
    </b-navbar>
    <div
      class="flex lg:h-screen w-screen lg:overflow-hidden xs:flex-col lg:flex-row"
    >
      <div
        class="relative xs:py-16 xs:px-8 lg:py-32 xs:w-full h-full overflow-y-scroll markdown-body post-right custom-scroll"
      >
        <h1>Politiques des cookies</h1>
        <p>
          Lors de la consultation du site, des informations relatives à votre
          navigation sont ainsi enregistrées dans des fichiers « Cookies »
          installés sur votre terminal, sous réserve de votre consentement lors
          de votre première consultation du site (bannière cookies). Vos
          paramétrages concernant les Cookies peuvent être modifiés à tout
          moment dans les conditions décrites ci-dessous.
        </p>
        <p>
          Un cookie est un petit fichier texte transféré sur votre ordinateur,
          smartphone ou tablette par le biais de votre navigateur Internet.
          Temporaires (cookies de session) ou permanents, les cookies sont
          enregistrés sur le disque dur de votre terminal lorsque vous visitez
          notre site, afin de permettre au site de vous reconnaître lors de vos
          visites ultérieures.
        </p>
        <h2>Usage et catégorie de cookies utilisés</h2>
        <p>
          Nous utilisons des cookies analytics permettant de surveiller la
          performance de ses sites Internet, par exemple pour déterminer le
          nombre de fois qu’une page est consultée et le nombre d’utilisateurs
          uniques sur son site Internet. Les services d’analyse Web peuvent être
          conçus et exploités par des tiers. Les informations fournies par ces
          cookies sont utilisées pour optimiser l’expérience de l’utilisateur ou
          pour identifier les parties du site Internet qui peuvent nécessiter
          des interventions de maintenance ou d’optimisation.
        </p>
        <p>Nous utilisons des cookies publicitaires de Google Adsense.</p>
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
      title: 'Politique des cookies'
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
