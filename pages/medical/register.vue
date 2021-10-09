<template>
  <theme-wrapper theme="fresh">
    <div class="main-wrap">
      <main-header :href="link.medical.login" text="login" />
      <div class="container-general container-front">
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
import Header from '~/components/medical/Header/Basic'
import Footer from '~/components/medical/Footer'
import RegisterForm from '~/components/medical/Forms/Register'
import ThemeWrapper from '~/components/ThemeWrapper'
import link from '~/static/text/link'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    RegisterForm,
    ThemeWrapper
  },
  data() {
    return {
      link: link
    }
  },
  head() {
    return {
      title: 'Register | ' + brand.medical.desc
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
