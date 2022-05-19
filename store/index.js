import Vuex from 'vuex'

export const state = () => ({
  locales: ['en', 'zh'],
  locale:  'en',
})

export const getters = {
  locale: (state) => state.locale,
  locales: (state) => state.locales,
}

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
      this.$cookies.set('lang', locale)
    }
  },
}

export const actions = {
  nuxtServerInit({ commit }) {
    // commit('SET_LANG', this.$cookies.get('lang') )
  },
}

new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
})
