export const state = () => ({
  header: 'mixed',
  footer: 'sitemap',
  corner: 'chat'
})

export const mutations = {
  set_header(state, type) {
    state.header = type
  },
  set_footer(state, type) {
    state.footer = type
  },
  set_corner(state, type) {
    state.corner = type
  }
}
