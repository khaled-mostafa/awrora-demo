<template>
  <theme-wrapper theme="ocean">
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
import Header from '~/components/agency/Header'
import Footer from '~/components/agency/Footer'
import ContactMap from '~/components/agency/Forms/ContactMap'
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
      title: 'Contact with Map | ' + brand.agency.desc
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
