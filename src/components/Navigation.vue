<template>
  <v-app-bar
    dense
    width="100%"
    :color="bg"
    :dark="dark"
    :elevation="elevate"
    :fixed="fixed"
    :absolute="absolute"
    >
    <v-spacer/>
    <v-toolbar-title>
      <!-- test123 -->
      <!-- {{bg}} -->
      <span to="/">Home</span> |
      <span to="/about">About</span>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      bg: 'transparent',
      elevate: 0,
      dark: false,
      fixed: false,
      absolute: true,
    }
  },
  created () {
    window.addEventListener('scroll', this.changeColor);
  },
  destroyed () {
    window.removeEventListener('scroll', this.changeColor);
  },
  methods: {
    changeColor() {
      var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
      // console.log(scrollPos)
      if (
        scrollPos > 100
      ) {
        this.bg = 'white';
        this.elevate = 5;
        // this.dark = true;
        this.fixed = true;
        this.absolute = false;
      } else {
        this.bg = 'transparent';
        this.elevate = 0;
        // this.dark = false;
        this.fixed = false;
        this.absolute = true;
      }
    },
  },
}
</script>