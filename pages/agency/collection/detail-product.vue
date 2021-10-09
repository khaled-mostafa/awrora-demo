<template>
  <theme-wrapper theme="ocean">
    <div class="main-wrap">
      <main-header />
      <div class="container-general">
        <detail />
        <description />
        <related-items />
        <comment-group />
      </div>
      <div id="footer">
        <main-footer />
      </div>
    </div>
  </theme-wrapper>
</template>

<style lang="scss" scoped>
@import '~/assets/pages';
</style>

<script>
import brand from '~/static/text/brand'
import Header from '~/components/agency/Header'
import Footer from '~/components/agency/Footer'
import Detail from '~/components/agency/List/Detail'
import Description from '~/components/agency/List/Description'
import RelatedItems from '~/components/agency/List/RelatedItems'
import Group from '~/components/agency/Comment/Group'
import ThemeWrapper from '~/components/ThemeWrapper'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Detail,
    Description,
    RelatedItems,
    ThemeWrapper,
    'comment-group': Group
  },
  head() {
    return {
      title: 'Detail Product | ' + brand.agency.desc
    }
  }
}
</script>
