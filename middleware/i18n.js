export default function ({ isHMR, app, store, route, params, error, redirect }) {
  if(process.server){
    console.log('process.server:true')
  }else{
    console.log('process.server:false')
  }
  console.log(app.$cookies.get('lang'))
  const defaultLocale = app.$cookies.get('lang') || app.i18n.fallbackLocale
  if (isHMR) {
    return
  }
  const locale = defaultLocale
  
  if (!store.state.locales.includes(locale)) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }
  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale
  if (locale === defaultLocale && route.fullPath.indexOf('/' + defaultLocale) === 0) {
    const toReplace = '^/' + defaultLocale + (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '')
    const re = new RegExp(toReplace)
    return redirect(route.fullPath.replace(re, '/'))
  }
}
