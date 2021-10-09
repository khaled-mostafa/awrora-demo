<template>
  <theme-wrapper theme="sunset">
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
import Header from '~/components/marketing/Header'
import Footer from '~/components/marketing/Footer'
import Detail from '~/components/marketing/List/Detail'
import Description from '~/components/marketing/List/Description'
import RelatedItems from '~/components/marketing/List/RelatedItems'
import Group from '~/components/marketing/Comment/Group'
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
      title: 'Detail Product | ' + brand.marketing.desc
    }
  }
}
</script>
