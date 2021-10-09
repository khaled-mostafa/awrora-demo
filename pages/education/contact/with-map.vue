<template>
  <theme-wrapper theme="smart">
    <div class="main-wrap">
      <main-header />
      <div class="container-general">
        <contact-map />
      </div>
      <main-footer />
    </div>
  </theme-wrapper>
</template>

<style scoped lang="scss">
@import '~/assets/pages';
</style>

<script>
import brand from '~/static/text/brand'
import Header from '~/components/education/Header'
import Footer from '~/components/education/Footer'
import ContactMap from '~/components/education/Forms/ContactMap'
import ThemeWrapper from '~/components/ThemeWrapper'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    ContactMap,
    ThemeWrapper
  },
  head() {
    return {
      title: 'Contact with Map | ' + brand.education.desc
    }
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
