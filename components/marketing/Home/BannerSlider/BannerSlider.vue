<template>
  <div class="banner-wrap">
    <div class="carousel" v-if="loaded">
      <slick
        class="slider"
        ref="slider"
        :options="slickOptions"
        @afterChange="handleAfterChange"
      >
        <div class="slide" id="slide1">
          <div class="inner">
            <div class="img background-banner">
              <svg width="918px" height="369px" viewBox="0 0 918 369" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="deco-banner" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g>
                    <polygon class="secondary-light" transform="translate(665.000000, 103.500000) scale(-1, 1) translate(-665.000000, -103.500000) " points="795 19 795 188 535 188"></polygon>
                    <polygon class="accent-light" transform="translate(500.500000, 130.500000) scale(-1, 1) translate(-500.500000, -130.500000) " points="466 73 535 73 466 188"></polygon>
                    <polygon class="primary-light" transform="translate(875.500000, 42.500000) scale(-1, 1) translate(-875.500000, -42.500000) " points="875.5 0 889.370415 5.1253534 903.239559 10.2519783 910.620415 23.2312905 918 36.2118742 915.436726 50.9712645 912.873452 65.7319262 890.260441 85 860.74083 85 838.126548 65.7319262 835.563274 50.9712645 833 36.2118742 840.380856 23.2312905 847.760441 10.2519783 861.630856 5.1253534"></polygon>
                    <polygon class="accent-light" transform="translate(435.000000, 201.500000) scale(-1, 1) translate(-435.000000, -201.500000) " points="435 159 446.499376 180.25 458 201.5 446.499376 222.75 435 244 423.499376 222.75 412 201.5 423.499376 180.25"></polygon>
                    <path d="M250.59544,299 C274.014488,299 293,317.960086 293,341.350244 C293,351.917326 289.122872,361.581125 282.714195,369 L223,309.195142 C230.417307,302.841166 240.056923,299 250.59544,299 Z" class="primary-main"></path>
                    <circle class="primary-light" cx="252.615385" cy="343.230769" r="25.7692308"></circle>
                    <polygon class="secondary-light" points="200 47 200 177 0 177"></polygon>
                    <polygon class="primary-light" fill-rule="nonzero" transform="translate(58.000000, 209.500000) scale(-1, -1) translate(-58.000000, -209.500000) " points="0 177 116 242 0 242"></polygon>
                  </g>
                </g>
              </svg>
              <img
                class="img-2d3d"
                :src="imgAPI.marketing[3]"
                :data-2d="imgAPI.marketing[2]"
                :data-3d="imgAPI.marketing[3]"
                alt="background"
              />
            </div>
            <v-container>
              <v-row>
                <v-col md="7" lg="6" cols="12" class="px-sm-6 d-flex align-center">
                  <div class="text">
                    <h4 class="use-text-title">{{ $t('marketing.banner_title') }}</h4>
                    <h5 class="use-text-subtitle">{{ $t('marketing.banner_subtitle') }}</h5>
                    <div class="btn-area">
                      <v-btn
                        text
                        href="#"
                        class="button"
                      >
                        {{ $t('common.btn_detail') }}
                      </v-btn>
                      <v-btn
                        :href="link.marketing.register"
                        color="secondary"
                        large
                        class="button"
                      >
                        {{ $t('common.btn_get') }}
                      </v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col md="5" lg="6" cols="12">
                  <div class="img">
                    <img
                      :src="imgAPI.marketing[5]"
                      :data-2d="imgAPI.marketing[4]"
                      :data-3d="imgAPI.marketing[5]"
                      class="img-2d3d"
                      alt="banner 1 3D"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
        <div class="slide" id="slide2">
          <div class="inner">
            <v-container>
              <v-row justify="end" :class="[isMobile ? 'column-reverse' : 'row']">
                <v-col md="5" lg="6" class="px-sm-6" cols="12">
                  <div class="img">
                    <img
                      :src="imgAPI.marketing[7]"
                      :data-2d="imgAPI.marketing[6]"
                      :data-3d="imgAPI.marketing[7]"
                      class="img-2d3d mr-md-15 float-md-right"
                      alt="banner 1 3D"
                    />
                  </div>
                </v-col>
                <v-col md="7" lg="6" cols="12" class="px-sm-6 d-flex align-center">
                  <div class="text">
                    <h4 class="use-text-title">{{ $t('marketing.banner_title') }}</h4>
                    <h5 class="use-text-subtitle">{{ $t('marketing.banner_subtitle') }}</h5>
                    <div class="btn-area">
                      <v-btn
                        text
                        href="#"
                        class="button"
                      >
                        {{ $t('common.btn_detail') }}
                      </v-btn>
                      <v-btn
                        :href="link.marketing.register"
                        color="secondary"
                        large
                        class="button"
                      >
                        {{ $t('common.btn_get') }}
                      </v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
        <div class="slide center-content" id="slide3">
          <div class="inner">
            <v-container>
              <v-row justify="end">
                <v-col cols="12" class="px-sm-12">
                  <div class="text text-center">
                    <h4 class="use-text-title">{{ $t('marketing.banner_title') }}</h4>
                    <h5 class="use-text-subtitle">{{ $t('marketing.banner_subtitle') }}</h5>
                    <div class="btn-area">
                      <v-btn
                        text
                        href="#"
                        class="button"
                      >
                        {{ $t('common.btn_detail') }}
                      </v-btn>
                      <v-btn
                        :href="link.marketing.register"
                        color="secondary"
                        large
                        class="button"
                      >
                        {{ $t('common.btn_get') }}
                      </v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div class="img h-banner">
                    <img
                      :src="imgAPI.marketing[9]"
                      :data-2d="imgAPI.marketing[8]"
                      :data-3d="imgAPI.marketing[9]"
                      class="img-2d3d"
                      alt="banner 1 3D"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </slick>
    </div>
    <hidden point="smDown">
      <v-container class="max-md">
        <nav class="slide-nav">
          <v-btn
            :class="{ active: currentSlide === 0 }"
            @click="gotoSlide(0)"
            text
          >
            <strong>First Slide</strong>
            Interdum et malesuada fames ac ante
          </v-btn>
          <v-divider class="divider" vertical inset />
          <v-btn
            :class="{ active: currentSlide === 1 }"
            @click="gotoSlide(1)"
            text
          >
            <strong>Second Slide</strong>
            Interdum et malesuada fames ac ante
          </v-btn>
          <v-divider class="divider" vertical inset />
          <v-btn
            :class="{ active: currentSlide === 2 }"
            @click="gotoSlide(2)"
            text
          >
            <strong>Third Slide</strong>
            Interdum et malesuada fames ac ante
          </v-btn>
        </nav>
      </v-container>
    </hidden>
  </div>
</template>

<style scoped lang="scss">
@import './banner-styles';
</style>

<script>
import Hidden from '../../Hidden'
import link from '~/static/text/link'
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    Hidden,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      currentSlide: 0,
      link: link,
      imgAPI: imgAPI,
      slickOptions: {
        dots: false,
        arrows: false,
        speed: 800,
        slidesToShow: 1,
        infinite: true,
        autoplay: false,
        cssEase: 'ease-out',
        responsive: [
          {
            breakpoint: 960,
            settings: {
              fade: true,
              dots: true
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleAfterChange(event, slick, currentSlide) {
      this.currentSlide = currentSlide
    },
    gotoSlide(index) {
      this.$refs.slider.goTo(index)
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
