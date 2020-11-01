<template>
  <div>
    <v-app-bar
      class="hidden-sm-and-down"
      :key="fullpath"
      dense
      width="100%"
      :color="bg"
      :dark="dark"
      :elevation="elevate"
      :fixed="fixed"
      :absolute="absolute"
      >
      <v-spacer/>
        <template v-for="(item, index) in menuOption">
          <v-btn 
            text 
            @click="goTo(item.id)" 
            color="primary"
            :key="index">{{item.text}}
          </v-btn>
        </template>
        <!-- test123 -->
        <!-- {{bg}} -->
    </v-app-bar>
    <v-app-bar
    class="hidden-md-and-up"
    :key="fullpath"
    dense
    width="100%"
    fixed
    color="primary"
    flat
    >
      <v-menu class="hidden-md-and-up">
        <template v-slot:activator="{ on }">
          <v-spacer/>
          <v-btn text small v-on="on" dark>
            Menu
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in menuOption" :key="index">
            <v-list-item-title class="primary--text" @click="goTo(item.id)">{{item.text}}</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="activeUser" to="/">
            <v-list-item-title>All Posts</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- test123 -->
      <!-- {{bg}} -->
  </v-app-bar>
  </div>
  
</template>

<script>
export default {
  data () {
    return {
      bg: 'transparent',
      elevate: 0,
      reload: 0,
      dark: false,
      fixed: false,
      absolute: true,
      fullpath: null,
      menuOption: [
        { text: 'Home', id: '/home' },
        { text: 'About', id: '/home#about' },
        { text: 'Career', id: '/home#career' },
        { text: 'Project', id: '/home#project' },
        { text: 'Organization', id: '/home#organization' },
        { text: 'Contact', id: '/home#contact' },
      ]
    }
  },
  created () {
    this.fullpath = this.$route.path +  this.$route.hash
    window.addEventListener('scroll', this.changeColor);
    this.changeColor
  },
  destroyed () {
    window.removeEventListener('scroll', this.changeColor);
  },
  watch:{
    $route (to, from){
      console.log(from)
      this.fullpath = to.path +  to.hash
      this.reload += 1
    }
  },
  methods: {
    goTo (item) {
      if (item !== '/home') {
        this.$router.push(item)
      } else {
        this.$router.replace('/home')
        this.$router.go('/home')
      }
      this.fullpath = this.$route.path +  this.$route.hash
      this.reload += 1
    },
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