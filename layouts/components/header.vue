<template>
  <header>
    <nuxt-link to="/">首页</nuxt-link>
    <nuxt-link to="/about">关于我们</nuxt-link>

    <button @click="lang">lang:{{ locale }}</button>
  </header>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['locale']),
  },
  methods: {
    lang() {
      if (this.locale == 'en') {
        this.$i18n.locale = 'zh'
        this.$store.commit('SET_LANG', 'zh')
      } else {
        this.$i18n.locale = 'en'
        this.$store.commit('SET_LANG', 'en')
      }
    },
    async init() {
      const { data } = await this.$axios.get('api-product/articleinfo/articleinfoList', {
        pageNum: 0,
        pageSize: 50,
      })

      this.items1 = data.list
    },
  },
}
</script>
<style lang="less" scoped>
header {
  height: 100px;
  background-color: #f9f9f9;
}
</style>
