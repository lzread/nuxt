<template>
  <section>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </section>
</template>

<script>
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
      title: '首页',
    }
  },
  created() {},
  methods: {},
}
</script>
