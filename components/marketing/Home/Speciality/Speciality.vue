<template>
  <fragment>
    <div class="root">
      <v-container>
        <v-row>
          <v-col
            cols="12"     
            lg="6"
            md="7"
            class="px-sm-6"
          >
            <h4 class="use-text-title2 text-capitalize">
              {{ $t('marketing.expertise_title') }}
            </h4>
            <p class="desc use-text-subtitle2">
              {{ $t('marketing.expertise_paragraph') }}
            </p>
            <div class="running-tag" v-if="loaded">
              <slick :options="slickOptions">
                <div
                  v-for="(group, indexGroup) in expertiseList"
                  :key="indexGroup"
                  class="tag-group"
                >
                  <span
                    v-for="(item, indexChild) in group"
                    :key="indexChild"
                    class="tag-item"
                  >
                    {{ item }}
                  </span>
                </div>
              </slick>
            </div>
          </v-col>
          <v-col
            cols="12"
            lg="6"
            md="5"
            class="px-6"
          >
            <div class="illustration-wrap">
              <u-animate-container>
                <u-animate
                  :offset="0"
                  name="fadeIn"
                  delay="0s"
                  duration="0.3s"
                >
                  <div>
                    <deco-building />
                  </div>
                </u-animate>
                <u-animate
                  :offset="-50"
                  name="fadeInRightShort"
                  delay="0.3s"
                  duration="0.3s"
                >
                  <figure>
                    <img
                      :src="imgAPI.marketing[13]"
                      :data-2d="imgAPI.marketing[12]"
                      :data-3d="imgAPI.marketing[13]"
                      class="img-2d3d"
                      alt="speciality 3d"
                    />
                  </figure>
                </u-animate>
              </u-animate-container>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </fragment>
</template>

<style lang="scss" scoped>
@import './speciality-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import DecoBuilding from '../Deco/Building'

export default {
  components: {
    DecoBuilding,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      imgAPI: imgAPI,
      loaded: false,
      slickOptions: {
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true
      },
      expertiseList: [
        ['social media', 'marketing', 'SEO'],
        ['Web Development', 'UI Designs', 'Mobile Apps'],
        ['Photography', 'Company Profile', 'Visual Editing'],
        ['social media', 'marketing', 'SEO'],
        ['Web Development', 'UI Designs', 'Mobile Apps'],
        ['Photography', 'Company Profile', 'Visual Editing'],
        ['social media', 'marketing', 'SEO'],
        ['Web Development', 'UI Designs', 'Mobile Apps'],
        ['Photography', 'Company Profile', 'Visual Editing']
      ]
    }
  },
  mounted() {
    this.loaded = true
  },
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
