import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)



export default ({ app, store }) => {
  store.commit('SET_LANG', app.$cookies.get('lang') || 'en')
  app.i18n = new VueI18n({
    locale: app.$cookies.get('lang'),
    fallbackLocale: app.$cookies.get('lang'),
    messages: {
      en: require('~/locales/en.json'),
      zh: require('~/locales/zh.json'),
    },
  })
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }
    return `/${app.i18n.locale}/${link}`
  }
}
