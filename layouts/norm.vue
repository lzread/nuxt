<template>
  <div>
    <single-header />
    <nuxt />
    <single-footer />
  </div>
</template>

<script>
import singleHeader from '@/layouts/components/header'
import singleFooter from '@/layouts/components/footer'
export default {
  name: 'Norm',
  components: { singleHeader, singleFooter },
  data() {
    return {}
  },
}
</script>
