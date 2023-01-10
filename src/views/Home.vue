<template>
  <div id="Home">
    <div class="page-title">{{ title }}</div>
    <Lists />
  </div>
</template>
  
  <script>
import { defineComponent } from '@vue/composition-api'
import Lists from '@/components/Lists.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Lists,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>
  
<style scoped lang="scss">
#Home {
  .page-title {
    font-size: 2rem;
  }
}
</style>
  