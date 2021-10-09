<template>
  <theme-wrapper theme="fresh">
    <div>
      <div class="main-wrap">
        <main-header home />
        <div class="container-wrap">
          <div id="home">
            <banner-slider />
          </div>
          <section class="space-top">
            <counter />
          </section>
          <section
            id="facility"
            class="space-top-short"
          >
            <facilities />
          </section>
          <section
            id="our-expertise"
            class="space-top"
          >
            <speciality />
          </section>
          <section
            id="ask-doctors"
            class="space-top-short"
          >
            <ask-doctors />
          </section>
          <section
            id="testimonials"
            class="space-top-short"
          >
            <testimonials />
          </section>
          <div class="space-top" id="call-to-action">
            <call-action />
          </div>
          <div class="space-top-short space-bottom-short" id="clinics">
            <clinics />
          </div>
        </div>
        <main-footer />
        <hidden point="smDown">
          <corner />
        </hidden>
        <hidden point="mdDown">
          <notification />
        </hidden>
      </div>
    </div>
  </theme-wrapper>
</template>

<style scoped lang="scss">
@import '~/assets/pages';
</style>

<script>
import Header from '~/components/medical/Header'
import Footer from '~/components/medical/Footer'
import BannerSlider from '~/components/medical/Home/BannerSlider'
import Counter from '~/components/medical/Home/Counter'
import Facilities from '~/components/medical/Home/Facilities'
import Speciality from '~/components/medical/Home/Speciality'
import AskDoctors from '~/components/medical/Home/AskDoctors'
import Testimonials from '~/components/medical/Home/Testimonials'
import CallAction from '~/components/medical/CallAction'
import Clinics from '~/components/medical/Home/Clinics'
import Hidden from '~/components/medical/Hidden'
import Corner from '~/components/agency/Home/Corner'
import Notification from '~/components/medical/Notification'
import ThemeWrapper from '~/components/ThemeWrapper'
import brand from '~/static/text/brand'

export default {
  components: {
    'main-header': Header,
    BannerSlider,
    Counter,
    Facilities,
    Speciality,
    Testimonials,
    AskDoctors,
    CallAction,
    Clinics,
    Hidden,
    Corner,
    Notification,
    ThemeWrapper,
    'main-footer': Footer
  },
  head() {
    return {
      title: brand.medical.desc
    }
  }
}
</script>
