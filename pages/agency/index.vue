<template>
  <theme-wrapper theme="ocean">
    <div>
      <div class="main-wrap">
        <main-header home />
        <div class="container-wrap">
          <div id="home">
            <banner-slider />
          </div>
          <section
            id="about"
            class="space-top"
          >
            <about />
          </section>
          <section
            id="services"
            :class="[isTablet ? 'space-top-short' : 'space-top']"
          >
            <services />
          </section>
          <section
            id="our-expertise"
            :class="[isMobile ? 'space-top-short' : 'space-top']"
          >
            <expertise />
          </section>
          <section
            id="testimonials"
            :class="[isMobile ? 'space-top-short' : 'space-top']"
          >
            <testimonials />
          </section>
          <section id="company" class="space-top-short space-bottom-short">
            <company-logo />
          </section>
          <section id="case-studies">
            <case-studies />
          </section>
          <div
            id="call-to-action"
            class="space-bottom-short"
          >
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
import Header from '~/components/agency/Header'
import Footer from '~/components/agency/Footer'
import CompanyLogo from '~/components/agency/CompanyLogo'
import BannerSlider from '~/components/agency/Home/BannerSlider'
import About from '~/components/agency/Home/About'
import Services from '~/components/agency/Home/Services'
import Expertise from '~/components/agency/Home/Expertise'
import Testimonials from '~/components/agency/Home/Testimonials'
import CaseStudies from '~/components/agency/Home/CaseStudies'
import CallAction from '~/components/agency/CallAction'
import Hidden from '~/components/agency/Hidden'
import Corner from '~/components/agency/Home/Corner'
import Notification from '~/components/agency/Notification'
import ThemeWrapper from '~/components/ThemeWrapper'
import brand from '~/static/text/brand'

export default {
  components: {
    'main-header': Header,
    BannerSlider,
    About,
    Services,
    Expertise,
    Testimonials,
    CompanyLogo,
    CaseStudies,
    CallAction,
    Hidden,
    Corner,
    Notification,
    'main-footer': Footer,
    ThemeWrapper
  },
  head() {
    return {
      title: brand.agency.desc
    }
  },
  computed: {
    isTablet() {
      return this.$mq === 'mdDown' || this.$mq === 'smDown' || this.$mq === 'xsDown' // eslint-disable-line
    },
    isMobile() {
      return this.$mq === 'smDown' || this.$mq === 'xsDown'
    }
  }
}
</script>
