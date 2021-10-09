<template>
  <footer class="footer">
    <decoration />
    <v-container class="max-lg">
      <nav>
        <ul>
          <li
            v-for="(item, index) in menu"
            :key="index"
          >
            <a :href="'#' + item">
              {{ $t('marketing.header_'+item) }}
            </a>
          </li>
        </ul>
      </nav>
      <div class="socmed">
        <v-btn icon class="icon">
          <i class="ion-social-twitter" />
        </v-btn>
        <v-btn icon class="icon">
          <i class="ion-social-facebook" />
        </v-btn>
        <v-btn icon class="icon">
          <i class="ion-social-instagram" />
        </v-btn>
      </div>
    </v-container>
    <div class="copyright">
      <p class="body-2 text-center">
        &copy;
        {{ brand.marketing.footerText }}
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import './footer-basic';
</style>

<script>
import brand from '~/static/text/brand'
import menu from '../Header/data/single'
import Decoration from './Decoration'

export default {
  components: {
    Decoration
  },
  data: () => ({
    brand: brand,
    menu: menu
  })
}
</script>
