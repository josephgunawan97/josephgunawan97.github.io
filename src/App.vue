<template>
  <v-app id="app">
    <Navigation/>
    <v-main>
      <router-view/>
    </v-main>
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

<style>
@media screen and (min-width: 960px) {
  .text-4 {
    font-size: 6vw !important;
  }
  .text-3 { 
    font-size: 3vw !important;
  }
  .text-2 {
    font-size: 2vw !important;
  }
  .text-1 {
    font-size: 1vw !important;

}
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 959px) {
  .text-4 {
    font-size: 10vw !important;
  }
  .text-3 { 
    font-size: 6vw !important;
  }
  .text-2 {
    font-size: 4vw !important;
  }
  .text-1 {
    font-size: 2vw !important;
  }
}
</style>
