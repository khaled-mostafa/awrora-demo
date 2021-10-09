<template>
  <div class="bg-wrapper">
    <div class="team-root">
      <v-container>
        <title-main
          :head="$t('common.about_team')"
          :align="isMobile ? 'center' : 'left'"
          desc="Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          color="primary"
        />
      </v-container>
      <div class="carousel mt-15" v-if="loaded">
        <slick
          ref="slick"
          :options="slickOptions"
        >
          <div
            v-for="(index) in 6"
            :key="index"
            class="item px-3"
          >
            <profile-card
              :connection="100"
              :favorites="10"
              :albums="12"
              :cover="imgAPI.photo[40+index]"
              :avatar="imgAPI.avatar[index]"
              name="John Dalton"
              title="Web Designer"
              type="round"
              orientation="landscape"
            />
          </div>
        </slick>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './about-style.scss';
</style>

<script>
import ProfileCard from '../Cards/ProfileCard'
import imgAPI from '~/static/images/imgAPI'
import Title from '../Title'

export default {
  components: {
    ProfileCard,
    'title-main': Title,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      imgAPI: imgAPI,
      slickOptions: {
        dots: true,
        arrows: false,
        slidesToShow: 2,
        variableWidth: true,
        autoplay: false,
        responsive: [
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
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
