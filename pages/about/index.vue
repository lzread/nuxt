<template>
  <nuxt-link to="/about/news">企业新闻</nuxt-link>
</template>

<script>
export default {
  name: 'AboutPage',
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
