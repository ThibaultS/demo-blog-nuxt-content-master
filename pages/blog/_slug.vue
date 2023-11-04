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
    <div class="flex lg:h-screen w-screen xs:flex-col lg:flex-row">
      <div
        class="xs:py-32 xs:px-8 lg:py-32 lg:px-32 xxlmin:px-96 xs:w-full markdown-body"
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
        <b-card class="mb-2 bg-secondary">
          <div class="detail-infos-card">
            <div class="mb-2">
              <span v-if="article.inspiration" class="mr-2">
                Sur la recette initiale de {{ article.inspiration }}
              </span>
              <span v-if="article.time" class="mr-2">
                <i class="fas fa-stopwatch"></i>
                {{ article.time }} min
              </span>
              <span v-if="article.recipeYield" class="mr-2">
                <i class="fas fa-utensils"></i>
                Pour {{ article.recipeYield }}
              </span>
              <span v-if="article.difficulty" class="mr-2">
                <i class="fas fa-check-double"></i>
                {{ article.difficulty }}
              </span>

              <span v-if="article.veggie" class="mr-2">
                <i class="fas fa-seedling"></i>
                <a href="/categories/vegetarien" class="link">Végératien</a>
              </span>
              <span v-if="article.sweety_salty" class="mr-2">
                Recette sucrée-salée
              </span>
              <span
                v-if="article.country != 'France' && article.country != ''"
                class="mr-2"
              >
                <i class="fas fa-globe-americas"></i>
                <span>{{ article.country }}</span>
              </span>
            </div>
          </div>
          <div>
            <a
              v-if="article.url"
              :href="article.url"
              target="_blank"
              class="icon-insta mr-2"
            >
              <i class="fab fa-instagram"></i>
              La recette sur Instagram
            </a>
            <a
              id="pinbtn"
              class="icon-pin"
              data-pin-do="buttonPin"
              data-pin-custom="custom"
              target="_top"
              :href="
                buildPinUrl(article.slug, article.img, article.description)
              "
            >
              <i class="fab fa-pinterest"></i>
              Enregistrer sur Pinterest
            </a>
          </div>
        </b-card>
        <!-- <b-card
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
        </b-card> -->
        <div class="theme-article mb-4">
          <span v-if="article.event == 'Noël 2021'">
            <i class="fas fa-gift"></i>
            <a href="/categories/noel-2021" class="link">
              Recette de Noël 2021
            </a>
          </span>
          <span v-if="article.time < 31">
            <a class="link mr-2" href="/categories/trente-minutes-chrono">
              Recettes en moins de 30 min chrono
            </a>
          </span>
          <span v-if="article.theme == 'Pâtes'">
            <a href="/categories/pates" class="link mr-2">Pâtes</a>
          </span>
          <span v-if="article.theme == 'Soupes et veloutés'">
            <a href="/categories/soupes-et-veloutes" class="link mr-2">
              Soupes et veloutés
            </a>
          </span>
          <span v-if="article.main_ingredient == 'Chocolat'">
            <a href="/categories/chocolat" class="link mr-2">
              A base de chocolat
            </a>
          </span>
          <span v-if="article.theme == 'Gâteaux'">
            <a href="/categories/gateaux" class="link mr-2">Gâteaux</a>
          </span>
          <span v-if="article.theme == 'Salades'">
            <a href="/categories/salades" class="link mr-2">Salades</a>
          </span>
          <span v-if="article.theme == 'Burgers'">
            <a href="/categories/burgers" class="link mr-2">Burgers</a>
          </span>
          <span v-if="article.theme == 'Tartines'">
            <a href="/categories/tartines" class="link mr-2">Tartines</a>
          </span>
          <span
            v-if="
              article.main_ingredient == 'Saumon' ||
              article.main_ingredient == 'Thon' ||
              article.main_ingredient == 'Daurade' ||
              article.main_ingredient == 'Lotte' ||
              article.main_ingredient == 'Bar' ||
              article.main_ingredient == 'Cabillaud' ||
              article.main_ingredient == 'Truite' ||
              article.main_ingredient == 'Calamar'
            "
          >
            <a href="/categories/poissons" class="link mr-2">Poissons</a>
          </span>
          <span
            v-if="
              article.main_ingredient == 'Crevette' ||
              article.main_ingredient == 'Saint-Jacques' ||
              article.main_ingredient == 'Huître' ||
              article.main_ingredient == 'Crabe' ||
              article.main_ingredient == 'Coques' ||
              article.main_ingredient == 'Palourde' ||
              article.main_ingredient == 'Moule' ||
              article.main_ingredient == 'Langouste'
            "
          >
            <a href="/categories/crustaces" class="link mr-2">Crustacés</a>
          </span>
          <span
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
            <a href="/categories/viandes" class="link mr-2">Viandes</a>
          </span>
          <span v-if="article.with == 'Boulette'">
            <a href="/categories/boulettes" class="link mr-2">Boulettes</a>
          </span>
        </div>
        <b-row>
          <div class="mb-4 ads-container">
            <ins
              class="adsbygoogle adsonsite adsonarticle"
              style="display: block"
              data-ad-client="ca-pub-4925011117186251"
              data-ad-slot="3273904797"
              data-ad-format="rectangle"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </b-row>
        <div class="mb-4 px-32">
          <img :src="article.img" :alt="article.alt" />
        </div>
        <nuxt-content :document="article" />
        <div class="mb-4">
          <em>Publiée le {{ formatDate(article.date) }}</em>
        </div>
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
            Mes recettes sont organisées par catégorie. Retrouvez les catégories
            en lien avec cette recette.
          </p>
          <div>
            <a
              v-if="article.event == 'Noël 2021'"
              href="/categories/noel-2021"
              class="link mr-2"
            >
              Mes recettes de Noël 2021
            </a>
            <a
              v-if="article.time < 31"
              class="link mr-2"
              href="/categories/trente-minutes-chrono"
            >
              Toutes mes recettes en moins de 30 min
            </a>
            <a
              v-if="article.theme == 'Pâtes'"
              class="link mr-2"
              href="/categories/pates"
            >
              Toutes mes recettes de pâtes
            </a>
            <a
              v-if="article.theme == 'Soupes et veloutés'"
              class="link mr-2"
              href="/categories/soupes-et-veloutes"
            >
              Toutes mes recettes de soupes et veloutés
            </a>
            <a
              v-if="article.theme == 'Tartines'"
              class="link mr-2"
              href="/categories/tartines"
            >
              Toutes mes recettes de tartines
            </a>
            <a
              v-if="article.theme == 'Burgers'"
              class="link mr-2"
              href="/categories/burgers"
            >
              Toutes mes recettes de burgers
            </a>
            <a
              v-if="article.main_ingredient == 'Chocolat'"
              class="link mr-2"
              href="/categories/chocolat"
            >
              Toutes mes desserts au chocolat
            </a>
            <a
              v-if="article.theme == 'Gâteaux'"
              class="link mr-2"
              href="/categories/gateaux"
            >
              Toutes mes recettes de gâteaux
            </a>
            <a
              v-if="article.veggie"
              class="link mr-2"
              href="/categories/vegetarien"
            >
              Toutes mes recettes végératiennes
            </a>
            <a
              v-if="
                article.main_ingredient == 'Saumon' ||
                article.main_ingredient == 'Thon' ||
                article.main_ingredient == 'Daurade' ||
                article.main_ingredient == 'Lotte' ||
                article.main_ingredient == 'Bar' ||
                article.main_ingredient == 'Cabillaud' ||
                article.main_ingredient == 'Truite' ||
                article.main_ingredient == 'Calamar'
              "
              class="link mr-2"
              href="/categories/poissons"
            >
              Toutes mes recettes de poissons
            </a>
            <a
              v-if="
                article.main_ingredient == 'Crevette' ||
                article.main_ingredient == 'Saint-Jacques' ||
                article.main_ingredient == 'Huître' ||
                article.main_ingredient == 'Crabe' ||
                article.main_ingredient == 'Coques' ||
                article.main_ingredient == 'Palourde' ||
                article.main_ingredient == 'Moule' ||
                article.main_ingredient == 'Langouste'
              "
              class="link mr-2"
              href="/categories/crustaces"
            >
              Toutes mes recettes de crustacés
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
              Toutes mes recettes de viandes
            </a>
            <a
              v-if="article.theme == 'Salades'"
              class="link mr-2"
              href="/categories/salades"
            >
              Toutes mes recettes de salades
            </a>
            <a
              v-if="
                article.main_ingredient == 'Asperge' ||
                article.with == 'Asperge'
              "
              class="link mr-2"
              href="/categories/asperge"
            >
              Toutes mes recettes avec des asperges
            </a>
            <a
              v-if="article.with == 'Boulette'"
              class="link mr-2"
              href="/categories/boulettes"
            >
              Toutes mes recettes de boulettes
            </a>
          </div>
          <div class="last-post mt-4">
            <h3>Mes dernières recettes</h3>
            <b-row class="row-cols-1 row-cols-sm-1 row-cols-lg-1 row-cols-xl-2">
              <b-col
                v-for="last of lasts"
                id="posts"
                :key="last.slug"
                class="mb-3"
              >
                <b-card class="post horizontal" no-body>
                  <NuxtLink
                    :to="{ name: 'blog-slug', params: { slug: last.slug } }"
                  >
                    <b-row>
                      <b-col>
                        <div class="img-container img-container-nom">
                          <b-card-img-lazy
                            :src="last.thumbnail"
                            left
                            blank-color="#d0b8ac"
                            loading="lazy"
                            alt=""
                          >
                          </b-card-img-lazy>
                        </div>
                        <b-card-body>
                          <b-card-title title-tag="h3">
                            {{ last.title }}
                          </b-card-title>
                          <div class="infos-card">
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
    const lasts = await $content('articles')
      .sortBy('id', 'desc')
      .limit(2)
      .fetch()
    return {
      article,
      lasts
    }
  },
  mounted() {
    this.showAd()
    this.showImg()
    this.recipeMetaCountry()
    // this.recipeMetaCategory()
  },
  methods: {
    buildPinUrl(urlpin, urlmedia, description) {
      return (
        'https://pinterest.com/pin/create/button/?' +
        'url=https://josies-recipes.netlify.app/blog/' +
        urlpin +
        '&media=' +
        urlmedia +
        '&description=' +
        description
      )
    },
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
    },
    recipeMetaCountry() {
      if (this.article.country == null) {
        const recipeCountry = 'France'
        return recipeCountry
      } else {
        const recipeCountry = this.article.country
        return recipeCountry
      }
    }
    // recipeMetaCategory() {
    //   if (this.aticle.recipeCategory != null) {
    //     const recipeCategorySchema = this.aticle.recipeCategory
    //     return recipeCategorySchema
    //   } else {
    //     const recipeCategorySchema = 'aa'
    //     return recipeCategorySchema
    //   }
    // }
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
            totalTime: 'PT' + this.article.time + 'M',
            recipeCuisine: this.article.country,
            recipeCategory: this.article.recipeCategory
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
