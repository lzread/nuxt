<template>
  <section>
    <button @click="lang">lang:{{ locale }}</button>
    <p>{{ $t('home.introduction') }}</p>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </section>
</template>

<script>

import { mapGetters } from 'vuex'

import { articleinfoList } from '@/api/news'

export default {
  name: 'IndexPage',
  layout: 'norm',
  async asyncData() {
    const { data } = await articleinfoList({
      pageNum: 0,
      pageSize: 50,
    })
    return { items: data.list }
  },
  data() {
    return {
      items: [],
    }
  },
  head() {
    return {
      title: this.$t('home.title'),
    }
  },
  computed: {
    ...mapGetters(['locale']),
  },
  created() {},
  fetch({ store, params }) {
    
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
  },
}
</script>
