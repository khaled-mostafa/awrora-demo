<template>
  <theme-wrapper theme="smart">
    <div class="main-wrap">
      <main-header />
      <banner>
        <img
          :src="imgAPI.ui[5]"
          :data-2d="imgAPI.ui[4]"
          :data-3d="imgAPI.ui[5]"
          class="img-2d3d"
          alt="services 3d"
        />
      </banner>
      <div class="space-top-short">
        <counter />
      </div>
      <div class="space-top-short space-bottom-short text-center text-md-start">
        <v-container>
          <title-main
            :head="$t('common.about_team')"
            :align="isMobile ? 'center' : 'left'"
            desc="Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            color="primary"
          />
          <team-grid />
        </v-container>
      </div>
      <div>
        <photo-slider />
      </div>
      <section class="bottom-deco-wrap space-top-short space-bottom-short">
        <deco-footer />
        <call-action />
      </section>
      <main-footer />
    </div>
  </theme-wrapper>
</template>

<style lang="scss" scoped>
@import '~/assets/pages';
</style>

<script>
import brand from '~/static/text/brand'
import imgAPI from '~/static/images/imgAPI'
import Header from '~/components/education/Header'
import Banner from '~/components/education/About/Banner'
import Title from '~/components/education/Title'
import Counter from '~/components/education/Counter'
import PhotoSlider from '~/components/education/About/PhotoSlider'
import TeamGrid from '~/components/education/About/TeamGrid'
import CallAction from '~/components/education/CallAction'
import DecoFooter from '~/components/education/Footer/DecorationTop'
import Footer from '~/components/education/Footer'
import ThemeWrapper from '~/components/ThemeWrapper'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    'title-main': Title,
    TeamGrid,
    Banner,
    Counter,
    PhotoSlider,
    CallAction,
    DecoFooter,
    ThemeWrapper
  },
  data() {
    return {
      imgAPI: imgAPI
    }
  },
  head() {
    return {
      title: 'Team | ' + brand.education.desc
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
    isDesktop() {
      const smUp = this.$store.state.breakpoints.smUp
      return smUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
