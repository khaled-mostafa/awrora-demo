<template>
  <theme-wrapper theme="ocean">
    <div class="main-wrap">
      <main-header />
      <div class="container-general">
        <contact />
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
import SiteMap from '~/components/agency/Footer'
import Contact from '~/components/agency/Forms/Contact'
import ThemeWrapper from '~/components/ThemeWrapper'

export default {
  components: {
    'main-header': Header,
    'main-footer': SiteMap,
    Contact,
    ThemeWrapper
  },
  head() {
    return {
      title: 'Contact | ' + brand.agency.desc
    }
  }
}
</script>
