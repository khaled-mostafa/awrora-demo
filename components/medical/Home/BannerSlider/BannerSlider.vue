<template>
  <div class="banner-wrap">
    <div class="carousel" v-if="loaded">
      <slick
        class="slider-deco"
        ref="sliderDeco"
        :options="slickOptionsDeco"
      >
        <div class="slide" :class="{ cur: currentSlide === 0 }">
          <div class="inner">
            <div class="deco-wrap">
              <div class="deco bottom s1">&nbsp;</div>
              <div class="deco top s1">&nbsp;</div>
            </div>
          </div>
        </div>
        <div class="slide" :class="{ cur: currentSlide === 1 }">
          <div class="inner">
            <div class="deco-wrap">
              <div class="deco bottom s2">&nbsp;</div>
              <div class="deco top s2">&nbsp;</div>
            </div>
          </div>
        </div>
        <div class="slide" :class="{ cur: currentSlide === 2 }">
          <div class="inner">
            &nbsp;
          </div>
        </div>
      </slick>
      <slick
        class="slider"
        ref="slider"
        :options="slickOptions"
        @afterChange="handleAfterChange"
      >
        <div class="slide" id="slide1">
          <div class="inner">
            <div class="img background-banner">
              <img
                class="img-2d3d"
                :src="imgAPI.medical[3]"
                :data-2d="imgAPI.medical[2]"
                :data-3d="imgAPI.medical[3]"
                alt="background"
              />
            </div>
            <v-container>
              <v-row>
                <v-col md="7" lg="6" cols="12" class="px-sm-12 d-flex align-center">
                  <div class="text">
                    <h4 class="use-text-title">{{ $t('medical.banner_title') }}</h4>
                    <h5 class="use-text-subtitle">{{ $t('medical.banner_subtitle') }}</h5>
                    <div class="btn-area">
                      <v-btn
                        text
                        href="#"
                        class="button"
                      >
                        {{ $t('common.btn_detail') }}
                      </v-btn>
                      <v-btn
                        :href="link.medical.register"
                        color="primary"
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
                      :src="imgAPI.medical[5]"
                      :data-2d="imgAPI.medical[4]"
                      :data-3d="imgAPI.medical[5]"
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
              <v-row justify="end" :class="[isTablet ? 'column-reverse' : 'row']">
                <v-col md="5" lg="6" class="px-6" cols="12">
                  <div class="img">
                    <img
                      :src="imgAPI.medical[7]"
                      :data-2d="imgAPI.medical[6]"
                      :data-3d="imgAPI.medical[7]"
                      :class="{ 'float-right mr-sm-15': isDesktop }"
                      class="img-2d3d"
                      alt="banner 1 3D"
                    />
                  </div>
                </v-col>
                <v-col md="7" lg="6" cols="12" class="px-sm-12 d-flex align-center">
                  <div class="text">
                    <h4 class="use-text-title">{{ $t('medical.banner_title') }}</h4>
                    <h5 class="use-text-subtitle">{{ $t('medical.banner_subtitle') }}</h5>
                    <div class="btn-area">
                      <v-btn
                        text
                        href="#"
                        class="button"
                      >
                        {{ $t('common.btn_detail') }}
                      </v-btn>
                      <v-btn
                        :href="link.medical.register"
                        color="primary"
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
            <v-container class="max-md">
              <v-row justify="end">
                <v-col cols="12" class="px-sm-12">
                  <div class="text text-center">
                    <h4 class="use-text-title">{{ $t('medical.banner_title') }}</h4>
                    <h5 class="use-text-subtitle">{{ $t('medical.banner_subtitle') }}</h5>
                    <div class="btn-area">
                      <v-btn
                        text
                        href="#"
                        class="button"
                      >
                        {{ $t('common.btn_detail') }}
                      </v-btn>
                      <v-btn
                        :href="link.medical.register"
                        color="primary"
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
                      :src="imgAPI.medical[9]"
                      :data-2d="imgAPI.medical[8]"
                      :data-3d="imgAPI.medical[9]"
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
      <v-container>
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
        asNavFor: '.slider-deco',
        responsive: [
          {
            breakpoint: 960,
            settings: {
              dots: true,
              fade: true
            }
          }
        ]
      },
      slickOptionsDeco: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        infinite: true,
        fade: true,
        cssEase: 'ease-out',
        autoplay: false
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
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    },
    isTablet() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
