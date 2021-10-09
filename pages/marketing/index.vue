<template>
  <theme-wrapper theme="sunset">
    <div>
      <div class="main-wrap">
        <main-header home />
        <div class="container-wrap">
          <div id="home">
            <banner-slider />
          </div>
          <section id="about" :class="{ 'space-top': isDesktop }" class="space-bottom-short">
            <about />
          </section>
          <section
            id="services"
            class="space-top-short"
          >
            <services />
          </section>
          <section
            id="our-expertise"
            :class="{ 'space-top-short': isDesktop }"
          >
            <speciality />
          </section>
          <section :class="{ 'space-top': isDesktop }">
            <company-logo />
          </section>
          <section
            id="case-studies"
            class="space-top-short"
          >
            <case-studies />
          </section>
          <section
            id="testimonials"
            class="space-top-short"
          >
            <testimonials />
          </section>
          <div class="space-top-short space-bottom-short" id="call-to-action">
            <call-action />
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
import Header from '~/components/marketing/Header'
import Footer from '~/components/marketing/Footer'
import BannerSlider from '~/components/marketing/Home/BannerSlider'
import About from '~/components/marketing/Home/About'
import Services from '~/components/marketing/Home/Services'
import Speciality from '~/components/marketing/Home/Speciality'
import CompanyLogo from '~/components/marketing/CompanyLogo'
import CaseStudies from '~/components/marketing/Home/CaseStudies'
import Testimonials from '~/components/marketing/Home/Testimonials'
import CallAction from '~/components/marketing/CallAction'
import Hidden from '~/components/marketing/Hidden'
import Corner from '~/components/agency/Home/Corner'
import ThemeWrapper from '~/components/ThemeWrapper'
import Notification from '~/components/marketing/Notification'
import brand from '~/static/text/brand'

export default {
  components: {
    'main-header': Header,
    BannerSlider,
    About,
    Services,
    Speciality,
    Testimonials,
    CompanyLogo,
    CaseStudies,
    CallAction,
    Hidden,
    Corner,
    Notification,
    ThemeWrapper,
    'main-footer': Footer
  },
  head() {
    return {
      title: brand.marketing.desc
    }
  },
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
