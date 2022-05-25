<template>

    <section>
        <h5>{{items.title}}</h5>
        
        <div v-html="items.content">

        </div>

    </section>

</template>

<script>
export default {
  name: 'Detail',
  layout: 'norm',
  async asyncData({ params, $axios }) {
    console.log(params.id)
    const { data } = await $axios.get(`api-product/articleinfo/articleinfoDetail?id=${params.id}`)

    return {
      items: data,
    }
  },
  data() {
    return {
      title: 'Hello World!',
    }
  },
  head() {
    return {
      title: '新闻',
    }
  },
}
</script>
