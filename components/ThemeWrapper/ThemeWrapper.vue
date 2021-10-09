<template>
  <div :class="[theme, (colorTheme || theme) + '-var']">
    <slot />
    <theme-palette
      :selected-color="colorTheme || theme"
      :change-color="changeColor"
      :theme-list="palette"
    />
  </div>
</template>

<script>
import { palette } from '../../config/vuetify.options'
import ThemePalette from './ThemePalette'

export default {
  components: {
    ThemePalette
  },
  data: () => ({
    palette: palette,
    colorTheme: null
  }),
  methods: {
    changeColor(colorName) {
      this.colorTheme = colorName
      const theme = {
        ...palette[colorName]
      }
      this.$vuetify.theme.themes = {
        light: {
          ...theme
        },
        dark: {
          ...theme
        }
      }
    }
  },
  props: {
    theme: {
      type: String,
      required: true
    }
  }
}
</script>
