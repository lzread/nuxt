<template>
  <section>
    
    <p>{{ $t('home.introduction') }}</p>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
    <pre>
      {{
        items1
      }}
    </pre>
  </section>
</template>

<script>

export default {
  name: 'IndexPage',
  layout: 'norm',
  async asyncData({ $axios }) {
    const { data } = await $axios.get('api-product/articleinfo/articleinfoList', {
      pageNum: 0,
      pageSize: 50,
    })

    return {
      items: data.list,
    }
  },
  data() {
    return {
      items: [],
      items1: [],
    }
  },
  head() {
    return {
      title: this.$t('home.title'),
    }
  },
  created() {
    this.init()
  },
  fetch({ store, params }) {},
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
