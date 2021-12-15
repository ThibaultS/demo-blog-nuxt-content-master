<template>
  <div class="noel noel-2021">
    <div>
      <b-navbar
        type="dark"
        class="customnav navbar-default sticky-top pt-1 pb-6"
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
      <b-container fluid="lg" class="animate animate3 slideUp">
        <b-row>
          <b-col class="intro mb-3">
            <div class="golden-block mb-3">
              <h1 class="glow mt-4">Calendrier de l'avent 2021</h1>
              <!-- <h2 class="baseline mb-4">
                <span>24</span>
                recettes en
                <span>24</span>
                jours
              </h2> -->
              <h2 class="baseline2 mb-4">24 recettes en 24 jours</h2>
            </div>
            <p class="lead">
              Noël est vraiment ma période préférée de l'année ! Le sapin, les
              cadeaux, l'ambiance générale, mais surtout des repas avec nos
              proches avec des recettes gourmandes. Pour l'occasion, et comme
              l'an dernier, je vous propose une recette chaque jour du mois de
              décembre, en guise de calendrier de l'avent ! Retrouvez chaque
              jour sur cette page et sur mon compte
              <a
                href="https://www.instagram.com/josiesrecipes/"
                target="_blank"
              >
                Instagram
              </a>
              une nouvelle recette pour les fêtes de fin d'année.
            </p>
          </b-col>
        </b-row>
        <b-row>
          <div class="mb-4 ads-container">
            <ins
              class="adsbygoogle adsonsite adsonhome"
              style="display: block"
              data-ad-client="ca-pub-4925011117186251"
              data-ad-slot="5914372396"
              data-ad-format="horizontal"
              data-full-width-responsive="true"
            ></ins>
          </div>
        </b-row>
        <b-row class="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
          <b-col v-for="article of articles" :key="article.slug" class="mb-4">
            <b-card class="text-center reveal-calendar">
              <div class="overlay-calendar">
                <div
                  class="overlay-container"
                  :style="{ 'background-image': article.thumbnail_noel }"
                >
                  <b-card-title title-tag="h2">
                    <span>
                      {{ article.calendrier }}
                    </span>
                  </b-card-title>
                </div>
              </div>
              <div>
                <b-card-text class="title-recipe">
                  {{ article.title }}
                </b-card-text>
                <nuxt-link
                  class="link"
                  :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                >
                  Découvrir
                </nuxt-link>
              </div>
            </b-card>
          </b-col>
          <!-- <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>1</span>décembre</b-card-title>
                  <b-card-footer>
                    Rendez-vous à 18h sur
                    <a
                      href="https://www.instagram.com/josiesrecipes/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col> 
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>2</span>décembre</b-card-title>
                  <b-card-footer>
                    Rendez-vous à 18h sur
                    <a
                      href="https://www.instagram.com/josiesrecipes/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>3</span>décembre</b-card-title>
                  <b-card-footer>
                    Rendez-vous à 18h sur
                    <a
                      href="https://www.instagram.com/josiesrecipes/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>4</span>décembre</b-card-title>
                  <b-card-footer>
                    Rendez-vous à 18h sur
                    <a
                      href="https://www.instagram.com/josiesrecipes/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>5</span>décembre</b-card-title>
                  <b-card-footer>
                    Rendez-vous à 18h sur
                    <a
                      href="https://www.instagram.com/josiesrecipes/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>6</span>décembre</b-card-title>
                  <b-card-footer>
                    Rendez-vous à 18h sur
                    <a
                      href="https://www.instagram.com/josiesrecipes/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>7</span>décembre</b-card-title>
                  <b-card-footer>
                    Rendez-vous à 18h sur
                    <a
                      href="https://www.instagram.com/josiesrecipes/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>8</span>décembre</b-card-title>
                  <b-card-footer>
                    Rendez-vous à 18h sur
                    <a
                      href="https://www.instagram.com/josiesrecipes/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>9</span>décembre</b-card-title>
                  <b-card-footer>
                    Rendez-vous à 18h sur
                    <a
                      href="https://www.instagram.com/josiesrecipes/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>10</span>décembre</b-card-title>
                  <b-card-footer>
                    Rendez-vous à 18h sur
                    <a
                      href="https://www.instagram.com/josiesrecipes/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>11</span>décembre</b-card-title>
                  <b-card-footer>
                    Rendez-vous à 18h sur
                    <a
                      href="https://www.instagram.com/josiesrecipes/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>12</span>décembre</b-card-title>
                  <b-card-footer>
                    Rendez-vous à 18h sur
                    <a
                      href="https://www.instagram.com/josiesrecipes/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>13</span>décembre</b-card-title>
                  <b-card-footer>
                    Rendez-vous à 18h sur
                    <a
                      href="https://www.instagram.com/josiesrecipes/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>14</span>décembre</b-card-title>
                  <b-card-footer>
                    Rendez-vous à 18h sur
                    <a
                      href="https://www.instagram.com/josiesrecipes/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>15</span>décembre</b-card-title>
                  <b-card-footer>
                    Rendez-vous à 18h sur
                    <a
                      href="https://www.instagram.com/josiesrecipes/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col> -->
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>16</span>décembre</b-card-title>
                  <b-card-footer>
                    Rendez-vous à 18h sur
                    <a
                      href="https://www.instagram.com/josiesrecipes/"
                      target="_blank"
                    >
                      Instagram
                    </a>
                  </b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>17</span>décembre</b-card-title>
                  <b-card-footer>Prochainement...</b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>18</span>décembre</b-card-title>
                  <b-card-footer>Prochainement...</b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>19</span>décembre</b-card-title>
                  <b-card-footer>Prochainement...</b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>20</span>décembre</b-card-title>
                  <b-card-footer>Prochainement...</b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>21</span>décembre</b-card-title>
                  <b-card-footer>Prochainement...</b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>22</span>décembre</b-card-title>
                  <b-card-footer>Prochainement...</b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>23</span>décembre</b-card-title>
                  <b-card-footer>Prochainement...</b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
          <b-col class="mb-4">
            <b-card class="text-center">
              <div class="overlay-calendar pt-3 pb-3">
                <div class="overlay-container">
                  <b-card-title><span>24</span>décembre</b-card-title>
                  <b-card-footer>Prochainement...</b-card-footer>
                </div>
              </div>
            </b-card>
          </b-col>
        </b-row>
        <footer>
          <b-row>
            <b-col>
              <b-card
                class="push-category push-event push-christmas mt-4 mb-4 pt-10 text-center"
              >
                <b-card-title title-tag="h2">
                  Mon calendrier de l'avent 2020
                </b-card-title>
                <b-card-text class="lead">
                  Retrouvez les 24 recettes que j'ai réalisé pour les fêtes de
                  fin d'année 2020. De quoi patienter en attendant la découverte
                  des recettes de cette année.
                </b-card-text>
                <nuxt-link
                  role="button"
                  target="_self"
                  to="/categories/noel"
                  class="link"
                >
                  Découvrir
                </nuxt-link>
              </b-card>
            </b-col>
          </b-row>
        </footer>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only([
        'id',
        'title',
        'slug',
        'description',
        'img',
        'thumbnail',
        'date',
        'url',
        'category',
        'event',
        'bkg',
        'calendrier',
        'thumbnail_noel',
        'published'
      ])
      .sortBy('id', 'asc')
      .where({ event: 'Noël 2021' })
      .limit(24)
      .fetch()
    return {
      articles
    }
  },
  data() {
    return {
      title: "Calendrier de l'avent 2021"
    }
  },
  mounted() {
    this.showAd()
  },
  methods: {
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
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Chaque jour de décembre, découvrez une recette pour les fêtes de fin d'année."
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://res.cloudinary.com/thibaults/image/upload/v1637764394/partage-noel-2021.png'
        }
      ]
    }
  }
}
</script>

<style class="postcss">
.article-card {
  border-radius: 8px;
}
.article-card a {
  background-color: #fff;
  border-radius: 8px;
}
.article-card img div {
  border-radius: 8px 0 0 8px;
}
</style>
