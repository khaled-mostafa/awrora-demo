<template>
  <theme-wrapper theme="sunset">
    <div class="main-wrap">
      <main-header />
      <div class="container-general">
        <div class="mt-md-10">
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
import Header from '~/components/marketing/Header'
import Footer from '~/components/marketing/Footer'
import Pricing from '~/components/marketing/Pricing'
import Faq from '~/components/marketing/Faq'
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
      title: brand.marketing.name + ' - Pricing'
    }
  }
}
</script>
