<template>
  <theme-wrapper theme="sunset">
    <div class="main-wrap">
      <main-header />
      <banner>
        <img
          :src="imgAPI.marketingInner[1]"
          :data-2d="imgAPI.marketingInner[0]"
          :data-3d="imgAPI.marketingInner[1]"
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
            <v-col md="6" cols="12" class="px-md-12">
              <about-video />
            </v-col>
            <v-col md="6" sm="8" cols="12" class="px-md-12">
              <about-progress />
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="space-top-short">
        <team-slider />
      </div>
      <div class="space-top-short space-bottom-short">
        <photo-slider />
      </div>
      <div class="space-top-short space-bottom-short" id="call-to-action">
        <call-action />
      </div>
      <div id="footer">
        <main-footer />
      </div>
    </div>
  </theme-wrapper>
</template>

<style lang="scss" scoped>
@import '~/assets/pages';
</style>

<script>
import brand from '~/static/text/brand'
import imgAPI from '~/static/images/imgAPI'
import Header from '~/components/marketing/Header'
import Banner from '~/components/marketing/About/Banner'
import CompanyLogo from '~/components/marketing/CompanyLogo'
import Counter from '~/components/marketing/Counter'
import Video from '~/components/marketing/About/Video'
import Progress from '~/components/marketing/About/Progress'
import TeamSlider from '~/components/marketing/About/TeamSlider'
import PhotoSlider from '~/components/marketing/About/PhotoSlider'
import CallAction from '~/components/marketing/CallAction'
import Footer from '~/components/marketing/Footer'
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
    ThemeWrapper
  },
  data() {
    return {
      imgAPI: imgAPI
    }
  },
  head() {
    return {
      title: 'About | ' + brand.marketing.desc
    }
  }
}
</script>
