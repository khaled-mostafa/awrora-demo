<template>
  <div class="root">
    <u-animate-container>
      <v-container class="carousel-header">
        <title-main
          :head="$t('education.popular_title')"
          :desc="$t('education.popular_desc')"
          :align="isMobile ? 'center' : 'left'"
          color="secondary"
        />
        <v-btn
          :href="link.education.product"
          color="primary"
          text
          class="view-all"
        >
          {{ $t('common.btn_seeall') }}
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </v-container>
      <v-container>
        <div class="floating-artwork">
          <slider-art :fade="fade">
            <u-animate
              :offset="60"
              name="fadeInRightShort"
              delay="0.3s"
              duration="0.5s"
            >
              <img
                :src="imgAPI.education[36]"
                :data-2d="imgAPI.education[35]"
                :data-3d="imgAPI.education[36]"
                class="img-2d3d"
                alt="popular course"
              />
            </u-animate>
          </slider-art>
        </div>
      </v-container>
      <div class="slider-wrap">
        <div class="carousel" v-if="loaded">
          <slick
            ref="slick"
            :options="slickOptions"
            @afterChange="handleAfterChange"
          >
            <div class="props item-props-first">
              <div />
            </div>
            <div
              v-for="(item, index) in courseData"
              :key="index"
              class="item"
            >
              <product-card
                type="round"
                :img="item.img"
                :title="item.title"
                :desc="item.desc"
                :rating="item.rating"
                :price="item.price"
                :href="link.education.productDetail"
              />
            </div>
          </slick>
        </div>
        <v-btn
          icon
          fab
          class="nav prev"
          @click="prev()"
        >
          <i class="ion-ios-arrow-left" />
        </v-btn>
        <v-btn
          icon
          fab
          class="nav next"
          @click="next()"
        >
          <i class="ion-ios-arrow-right" />
        </v-btn>
      </div>
    </u-animate-container>
  </div>
</template>

<style lang="scss" scoped>
@import './popular-course-style.scss';
</style>

<script>
import link from '~/static/text/link'
import imgAPI from '~/static/images/imgAPI'
import SliderArt from '../SliderArt'
import ProductCard from '../../Cards/ProductCard'
import Title from '../../Title'

const courseData = [
  {
    img: imgAPI.education[9],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[5],
    title: 'Vivamus sit amet',
    rating: 4,
    price: 10,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[3],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[4],
    title: 'Vivamus sit amet',
    rating: 3,
    price: 25,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[8],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 50,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.education[7],
    title: 'Vivamus sit amet',
    rating: 5,
    price: 40,
    desc:
      'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  }
]

export default {
  components: {
    'title-main': Title,
    ProductCard,
    SliderArt,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      link: link,
      imgAPI: imgAPI,
      loaded: false,
      fade: false,
      courseData: courseData,
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        slidesToShow: 4,
        arrows: false,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
    setTimeout(() => {
      if (this.$vuetify.rtl) {
        const lastSlide = Math.floor(this.courseData.length - 2)
        this.$refs.slick.goTo(lastSlide)
      }
    }, 200)
  },
  methods: {
    next: function() {
      this.$refs.slick.next()
    },
    prev: function() {
      this.$refs.slick.prev()
    },
    handleAfterChange(event, slick, currentSlide) {
      if (currentSlide >= 1) {
        this.fade = true
      } else {
        this.fade = false
      }
    }
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  },
}
</script>
