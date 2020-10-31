<template>
  <div class="home">
    <Page msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Page from '@/components/Page.vue'

export default {
  name: 'Home',
  components: {
    Page
  }
}
</script>
