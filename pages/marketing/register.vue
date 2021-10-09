<template>
  <theme-wrapper theme="sunset">
    <div class="main-wrap">
      <form-deco />
      <main-header :href="link.marketing.login" text="login" />
      <div class="container-general">
        <register-form />
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
import Header from '~/components/marketing/Header/Basic'
import Footer from '~/components/marketing/Footer'
import FormDeco from '~/components/marketing/Decoration/FormDeco'
import RegisterForm from '~/components/marketing/Forms/Register'
import ThemeWrapper from '~/components/ThemeWrapper'
import link from '~/static/text/link'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    RegisterForm,
    FormDeco,
    ThemeWrapper
  },
  data() {
    return {
      link: link
    }
  },
  head() {
    return {
      title: 'Register | ' + brand.marketing.desc
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
