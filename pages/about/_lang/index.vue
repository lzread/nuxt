<template>
  <section>
    <p>{{ $t('home.introduction') }}</p>
    <nuxt-link to="/about/news">企业新闻</nuxt-link>
  </section>
</template>

<script>
export default {
  name: 'AboutPage',
  layout: 'norm',
  data() {
    return {
      title: 'Hello World!',
    }
  },
  head() {
    return {
      title: '关于我们',
    }
  },
}
</script>
