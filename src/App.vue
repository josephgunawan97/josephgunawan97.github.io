<template>
  <v-app id="app">
    <Navigation/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>


<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'Home',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
// @import url('https://fonts.googleapis.com/css? family=Oxygen:300,400,700&display=swap');
// @import url('https://fonts.googleapis.com/css? family=Comfortaa:300,400,600,700&display=swap');

// $body-font-family: 'Oxygen';
// $heading-font-family: 'Oxygen';
// $title-font: 'Comfortaa';
// #v-application {
//   font-family: $body-font-family, sans-serif !important;
//   .title { // To pin point specific classes of some components
//     font-family: $title-font, sans-serif !important;
//   }
// }
</style>
