<template>
  <theme-wrapper theme="smart">
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
import Header from '~/components/education/Header'
import Footer from '~/components/education/Footer'
import Pricing from '~/components/education/Pricing'
import Faq from '~/components/education/Faq'
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
      title: brand.education.name + ' - Pricing'
    }
  }
}
</script>
