<template>
  <theme-wrapper theme="ocean">
    <div class="main-wrap">
      <main-header />
      <div class="container-general">
        <div class="mt-5">
          <pricing />
        </div>
        <div class="space-top-short">
          <faq />
        </div>
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
import Pricing from '~/components/agency/Pricing'
import Faq from '~/components/agency/Faq'
import ThemeWrapper from '~/components/ThemeWrapper'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Pricing,
    Faq,
    ThemeWrapper
  },
  head() {
    return {
      title: brand.agency.name + ' - Pricing'
    }
  }
}
</script>
