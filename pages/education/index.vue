<template>
  <theme-wrapper theme="smart">
    <div>
      <div class="main-wrap">
        <main-header home />
        <div class="container-wrap">
          <div id="home">
            <banner-slider />
          </div>
          <section id="feature" class="space-top">
            <feature />
          </section>
          <section id="popular" class="space-top-short">
            <popular-course />
          </section>
          <section id="explore">
            <explore />
          </section>
          <section id="about" class="space-top-short">
            <about />
          </section>
          <section id="testimonials" class="space-top">
            <testimonials />
          </section>
          <section id="blog" class="space-top">
            <blog />
          </section>
        </div>
        <section id="subscribe" class="bottom-deco-wrap space-top">
          <deco-footer />
          <subscribe-form />
        </section>
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
import BannerSlider from '~/components/education/Home/BannerSlider'
import Feature from '~/components/education/Home/Feature'
import PopularCourse from '~/components/education/Home/PopularCourse'
import Explore from '~/components/education/Home/Explore'
import About from '~/components/education/Home/About'
import Testimonials from '~/components/education/Home/Testimonials'
import Blog from '~/components/education/Home/Blog'
import DecoFooter from '~/components/education/Footer/DecorationTop'
import SubscribeForm from '~/components/education/SubscribeForm'
import Header from '~/components/education/Header'
import Footer from '~/components/education/Footer'
import Hidden from '~/components/education/Hidden'
import Corner from '~/components/agency/Home/Corner'
import Notification from '~/components/education/Notification'
import ThemeWrapper from '~/components/ThemeWrapper'
import brand from '~/static/text/brand'

export default {
  components: {
    'main-header': Header,
    BannerSlider,
    Feature,
    PopularCourse,
    Explore,
    About,
    Testimonials,
    Blog,
    SubscribeForm,
    DecoFooter,
    Hidden,
    Corner,
    Notification,
    ThemeWrapper,
    'main-footer': Footer
  },
  head() {
    return {
      title: brand.education.desc
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
