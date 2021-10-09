<template>
  <theme-wrapper theme="fresh">
    <div class="main-wrap">
      <main-header />
      <banner>
        <img
          :src="imgAPI.medicalInner[1]"
          :data-2d="imgAPI.medicalInner[0]"
          :data-3d="imgAPI.medicalInner[1]"
          class="img-2d3d"
          alt="services 3d"
        />
      </banner>
      <div>
        <company-logo />
      </div>
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
import Header from '~/components/medical/Header'
import Banner from '~/components/medical/About/Banner'
import CompanyLogo from '~/components/medical/CompanyLogo'
import Counter from '~/components/medical/Counter'
import Video from '~/components/medical/About/Video'
import Progress from '~/components/medical/About/Progress'
import TeamSlider from '~/components/medical/About/TeamSlider'
import PhotoSlider from '~/components/medical/About/PhotoSlider'
import CallAction from '~/components/medical/CallAction'
import Footer from '~/components/medical/Footer'
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
      title: 'About | ' + brand.medical.desc
    }
  }
}
</script>
