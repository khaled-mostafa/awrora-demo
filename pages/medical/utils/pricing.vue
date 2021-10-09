<template>
  <theme-wrapper theme="fresh">
    <div class="main-wrap">
      <main-header />
      <div class="container-general">
        <div class="mt-15">
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
import Header from '~/components/medical/Header'
import Footer from '~/components/medical/Footer'
import Pricing from '~/components/medical/Pricing'
import Faq from '~/components/medical/Faq'
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
      title: brand.medical.name + ' - Pricing'
    }
  }
}
</script>
