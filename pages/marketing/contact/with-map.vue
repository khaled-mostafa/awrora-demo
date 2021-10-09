<template>
  <theme-wrapper theme="sunset">
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
import Header from '~/components/marketing/Header'
import Footer from '~/components/marketing/Footer'
import ContactMap from '~/components/marketing/Forms/ContactMap'
import ThemeWrapper from '~/components/ThemeWrapper'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    ThemeWrapper,
    ContactMap
  },
  head() {
    return {
      title: 'Contact with Map | ' + brand.marketing.desc
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
