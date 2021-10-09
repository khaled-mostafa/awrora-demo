<template>
  <theme-wrapper theme="fresh">
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
import Header from '~/components/medical/Header'
import Footer from '~/components/medical/Footer'
import Detail from '~/components/medical/List/Detail'
import Description from '~/components/medical/List/Description'
import RelatedItems from '~/components/medical/List/RelatedItems'
import Group from '~/components/medical/Comment/Group'
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
      title: 'Detail Product | ' + brand.medical.desc
    }
  }
}
</script>
