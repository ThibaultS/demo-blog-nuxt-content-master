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
      <NavItems />
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
        <h1 v-if="article.event != 'Noël 2021'">{{ article.title }}</h1>
        <h1 v-if="article.event == 'Noël 2021'" class="noel-title">
          🎄 {{ article.title }}
        </h1>
        <div v-if="article.event == 'Noël 2021'" class="big-lead">
          Recette du {{ article.calendrier }} décembre de mon calendrier de
          l'avent 2021
        </div>
        <p v-if="article.description" class="lead">
          {{ article.description }}
        </p>
        <b-card class="mb-4 bg-secondary">
          <div class="detail-infos-card">
            <div v-if="article.event == 'Noël 2021'">
              <i class="fas fa-gift"></i>
              <a href="/categories/noel-2021" class="link">
                Recette de Noël 2021
              </a>
            </div>
            <div v-if="article.theme == 'Pâtes'">
              Thème : <a href="/categories/pates" class="link">Pâtes</a>
            </div>
            <div v-if="article.theme == 'Soupes et veloutés'">
              Thème :
              <a href="/categories/soupes-et-veloutes" class="link">
                Soupes et veloutés
              </a>
            </div>
            <div v-if="article.main_ingredient == 'Chocolat'">
              A base de <a href="/categories/chocolat" class="link">chocolat</a>
            </div>
            <div v-if="article.theme == 'Gâteaux'">
              Thème : <a href="/categories/gateaux" class="link">Gâteaux</a>
            </div>
            <div v-if="article.theme == 'Salades'">
              Thème : <a href="/categories/salades" class="link">Salades</a>
            </div>
            <div v-if="article.theme == 'Burgers'">
              Thème :
              <a href="/categories/burgers-et-tartines" class="link">Burgers</a>
            </div>
            <div v-if="article.theme == 'Tartines'">
              Thème :
              <a href="/categories/burgers-et-tartines" class="link">
                Tartines
              </a>
            </div>
            <div
              v-if="
                article.main_ingredient == 'Saumon' ||
                article.main_ingredient == 'Thon' ||
                article.main_ingredient == 'Daurade' ||
                article.main_ingredient == 'Lotte' ||
                article.main_ingredient == 'Crevette' ||
                article.main_ingredient == 'Bar' ||
                article.main_ingredient == 'Cabillaud' ||
                article.main_ingredient == 'Saint-Jacques' ||
                article.main_ingredient == 'Huître' ||
                article.main_ingredient == 'Crabe' ||
                article.main_ingredient == 'Truite' ||
                article.main_ingredient == 'Coques' ||
                article.main_ingredient == 'Palourde' ||
                article.main_ingredient == 'Moule' ||
                article.main_ingredient == 'Calamar'
              "
            >
              Thème :
              <a href="/categories/poissons-et-crustaces" class="link">
                Poissons et crustacés
              </a>
            </div>
            <div
              v-if="
                article.main_ingredient == 'Boeuf' ||
                article.main_ingredient == 'Poulet' ||
                article.main_ingredient == 'Dinde' ||
                article.main_ingredient == 'Veau' ||
                article.main_ingredient == 'Canard' ||
                article.main_ingredient == 'Chapon' ||
                article.main_ingredient == 'Agneau' ||
                article.main_ingredient == 'Lapin' ||
                article.main_ingredient == 'Boudin' ||
                article.main_ingredient == 'Porc'
              "
            >
              Thème :
              <a href="/categories/viandes" class="link">Viandes</a>
            </div>
            <div v-if="article.with == 'Boulette'">
              Thème :
              <a href="/categories/boulettes" class="link">Boulettes</a>
            </div>
            <div v-if="article.veggie">
              <i class="fas fa-seedling"></i>
              <a href="/categories/vegetarien" class="link">Végératien</a>
            </div>
            <div v-if="article.sweety_salty">Recette sucrée-salée</div>
            <div v-if="article.country">
              <i class="fas fa-globe-americas"></i>
              Origine : {{ article.country }}
            </div>
            <div v-if="article.difficulty">
              <i class="fas fa-check-double"></i>
              {{ article.difficulty }}
            </div>
            <div v-if="article.time">
              <i class="fas fa-stopwatch"></i>
              {{ article.time }} min
              <span v-if="article.time < 31">
                -
                <a class="link mr-2" href="/categories/trente-minutes-chrono">
                  Recettes en moins de 30 min
                </a>
              </span>
            </div>
            <div v-if="article.recipeYield">
              <i class="fas fa-utensils"></i>
              Pour {{ article.recipeYield }}
            </div>
          </div>
          <div v-if="article.url" class="mt-2">
            <a :href="article.url" target="_blank" class="icon-insta">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
          </div>
          <div>
            <em>Publiée le {{ formatDate(article.date) }}</em>
          </div>
        </b-card>
        <b-card
          v-if="article.event == 'Noël 2021'"
          class="push-category push-event push-christmas mb-4 pt-2 pb-2 text-center"
        >
          <b-card-title title-tag="h3">
            Mon calendrier de l'avent 2021
          </b-card-title>
          <b-card-text class="lead">
            Cette année encore, je vous propose 24 recettes en 24 jours pour
            vous donner plein d'idées pour vos repas de noël. Chaque jour,
            découvrez une nouvelle recette.
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
        <b-row>
          <div class="mb-4 ads-container">
            <ins
              class="adsbygoogle adsonsite adsonarticle"
              style="display: block"
              data-ad-client="ca-pub-4925011117186251"
              data-ad-slot="9352922518"
              data-ad-format="horizontal"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </b-row>
        <nuxt-content :document="article" />
        <!-- <b-card
          class="push-category push-event push-christmas mb-4 pt-2 pb-2 text-center"
        >
          <b-card-title title-tag="h3">
            Mon calendrier de l'avent 2021
          </b-card-title>
          <b-card-text class="lead">
            Cette année encore, je vous propose 24 recettes en 24 jours pour
            vous donner plein d'idées pour vos repas de noël. Chaque jour,
            découvrez une nouvelle recette.
          </b-card-text>
          <nuxt-link
            role="button"
            target="_self"
            to="/categories/noel-2021"
            class="link"
          >
            Découvrir
          </nuxt-link>
        </b-card> -->
        <div class="mb-3 rebound-block">
          <h2>Cela pourrait vous intéresser</h2>
          <p>
            Mes recettes sont organisés par catégorie. Retrouvez les catégories
            en lien avec cette recette.
          </p>
          <div>
            <a
              v-if="article.event == 'Noël 2021'"
              href="/categories/noel-2021"
              class="link mr-2"
            >
              Recette de Noël 2021
            </a>
            <a
              v-if="article.time < 31"
              class="link mr-2"
              href="/categories/trente-minutes-chrono"
            >
              Recettes en moins de 30 min
            </a>
            <a
              v-if="article.theme == 'Pâtes'"
              class="link mr-2"
              href="/categories/pates"
            >
              Pâtes
            </a>
            <a
              v-if="article.theme == 'Soupes et veloutés'"
              class="link mr-2"
              href="/categories/soupes-et-veloutes"
            >
              Soupes et veloutés
            </a>
            <a
              v-if="article.theme == 'Tartines'"
              class="link mr-2"
              href="/categories/burgers-et-tartines"
            >
              Tartines
            </a>
            <a
              v-if="article.theme == 'Burgers'"
              class="link mr-2"
              href="/categories/burgers-et-tartines"
            >
              Burgers
            </a>
            <a
              v-if="article.main_ingredient == 'Chocolat'"
              class="link mr-2"
              href="/categories/chocolat"
            >
              Desserts au chocolat
            </a>
            <a
              v-if="article.theme == 'Gâteaux'"
              class="link mr-2"
              href="/categories/gateaux"
            >
              Gâteaux
            </a>
            <a
              v-if="article.veggie"
              class="link mr-2"
              href="/categories/vegetarien"
            >
              Végératien
            </a>
            <a
              v-if="
                article.main_ingredient == 'Saumon' ||
                article.main_ingredient == 'Thon' ||
                article.main_ingredient == 'Daurade' ||
                article.main_ingredient == 'Lotte' ||
                article.main_ingredient == 'Crevette' ||
                article.main_ingredient == 'Bar' ||
                article.main_ingredient == 'Cabillaud' ||
                article.main_ingredient == 'Saint-Jacques' ||
                article.main_ingredient == 'Huître' ||
                article.main_ingredient == 'Crabe' ||
                article.main_ingredient == 'Truite' ||
                article.main_ingredient == 'Coques' ||
                article.main_ingredient == 'Palourde' ||
                article.main_ingredient == 'Moule' ||
                article.main_ingredient == 'Calamar'
              "
              class="link mr-2"
              href="/categories/poissons-et-crustaces"
            >
              Poissons et crustacés
            </a>
            <a
              v-if="
                article.main_ingredient == 'Boeuf' ||
                article.main_ingredient == 'Poulet' ||
                article.main_ingredient == 'Dinde' ||
                article.main_ingredient == 'Veau' ||
                article.main_ingredient == 'Canard' ||
                article.main_ingredient == 'Chapon' ||
                article.main_ingredient == 'Agneau' ||
                article.main_ingredient == 'Lapin' ||
                article.main_ingredient == 'Boudin' ||
                article.main_ingredient == 'Porc'
              "
              class="link mr-2"
              href="/categories/viandes"
            >
              Viandes
            </a>
            <a
              v-if="article.theme == 'Salades'"
              class="link mr-2"
              href="/categories/salades"
            >
              Salades
            </a>
            <a
              v-if="
                article.main_ingredient == 'Asperge' ||
                article.with == 'Asperge'
              "
              class="link mr-2"
              href="/categories/asperge"
            >
              Asperges
            </a>
            <a
              v-if="article.with == 'Boulette'"
              class="link mr-2"
              href="/categories/boulettes"
            >
              Boulettes
            </a>
          </div>
          <div class="last-post mt-4">
            <h3>Ma dernière publication</h3>
            <p>
              Chaque semaine, je publie 4 nouvelles recettes. Découvrez la
              dernière recette publiée sur le site.
            </p>
            <b-row id="posts" class="row-cols-1">
              <b-col class="mb-3">
                <b-card class="post horizontal" no-body>
                  <NuxtLink
                    :to="{ name: 'blog-slug', params: { slug: last.slug } }"
                  >
                    <b-row>
                      <b-col md="5">
                        <div class="img-container">
                          <b-card-img-lazy
                            :src="last.thumbnail"
                            left
                            blank-color="#d0b8ac"
                            loading="lazy"
                            alt=""
                          >
                          </b-card-img-lazy>
                        </div>
                      </b-col>
                      <b-col md="7">
                        <b-card-body>
                          <b-card-title title-tag="h3">
                            {{ last.title }}
                          </b-card-title>
                          <p class="lead mb-3">{{ last.description }}</p>
                          <div class="infos-card">
                            <div v-if="last.veggie">
                              <i class="fas fa-seedling"></i>
                              Recette végétarienne
                            </div>
                            <div v-if="last.country">
                              <i class="fas fa-globe-americas"></i>
                              {{ last.country }}
                            </div>
                            <div v-if="last.difficulty">
                              <i class="fas fa-check-double"></i>
                              {{ last.difficulty }}
                            </div>
                            <div v-if="article.time">
                              <i class="fas fa-stopwatch"></i>
                              {{ last.time }} min
                            </div>
                          </div>
                        </b-card-body>
                      </b-col>
                    </b-row>
                  </NuxtLink>
                </b-card>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const [last] = await $content('articles').sortBy('id', 'desc').fetch()
    return {
      article,
      last
    }
  },
  mounted() {
    this.showAd()
    this.showImg()
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('fr', options)
    },
    showAd() {
      this.show = true
      // console.log('updateAd')

      this.$nextTick(() => {
        try {
          // Once ad container (<ins>) DOM has (re-)rendered, requesst a new advert
          ;(window.adsbygoogle = window.adsbygoogle || []).push({})
          // console.log('goof')
        } catch (error) {
          // console.error(error)
        }
      })
    },
    showImg() {
      setTimeout(function () {
        const flex = document.getElementsByClassName('flex')[0]
        flex.setAttribute('style', '')
      }, 700)
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
</style>
