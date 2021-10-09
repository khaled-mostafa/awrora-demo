<template>
  <theme-wrapper theme="smart">
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
import Header from '~/components/education/Header'
import Footer from '~/components/education/Footer'
import Detail from '~/components/education/List/Detail'
import Description from '~/components/education/List/Description'
import RelatedItems from '~/components/education/List/RelatedItems'
import Group from '~/components/education/Comment/Group'
import ThemeWrapper from '~/components/ThemeWrapper'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Detail,
    Description,
    RelatedItems,
    'comment-group': Group,
    ThemeWrapper
  },
  head() {
    return {
      title: 'Detail Product | ' + brand.education.desc
    }
  }
}
</script>
