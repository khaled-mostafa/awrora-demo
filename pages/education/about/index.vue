<template>
  <theme-wrapper theme="smart">
    <div class="main-wrap">
      <main-header />
      <banner>
        <img
          :src="imgAPI.educationInner[1]"
          :data-2d="imgAPI.educationInner[0]"
          :data-3d="imgAPI.educationInner[1]"
          class="img-2d3d"
          alt="services 3d"
        />
      </banner>
      <company-logo />
      <div class="space-top-short">
        <counter />
      </div>
      <div class="space-top-short">
        <v-container>
          <v-row justify="center">
            <v-col md="6" cols="12" class="px-md-6">
              <about-video />
            </v-col>
            <v-col md="6" sm="8" cols="12" class="px-md-6">
              <about-progress />
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="space-top-short">
        <team-slider />
      </div>
      <div class="space-top-short space-bottom">
        <photo-slider />
      </div>
      <section :class="{ 'space-top': isDesktop }" class="bottom-deco-wrap space-top space-bottom-short">
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
import CompanyLogo from '~/components/education/CompanyLogo'
import Counter from '~/components/education/Counter'
import Video from '~/components/education/About/Video'
import Progress from '~/components/education/About/Progress'
import TeamSlider from '~/components/education/About/TeamSlider'
import PhotoSlider from '~/components/education/About/PhotoSlider'
import CallAction from '~/components/education/CallAction'
import DecoFooter from '~/components/education/Footer/DecorationTop'
import Footer from '~/components/education/Footer'
import ThemeWrapper from '~/components/ThemeWrapper'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Banner,
    CompanyLogo,
    Counter,
    'about-progress': Progress,
    'about-video': Video,
    TeamSlider,
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
      title: 'About | ' + brand.education.desc
    }
  },
  computed: {
    isDesktop() {
      const smUp = this.$store.state.breakpoints.smUp
      return smUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
