<template>
  <div class="home">
    <welcome ref="welcome" class="fl-welcome" @on-click="scrollMeTo"/>
    <about ref="about" id="about" class="fl-about" @on-click="scrollMeTo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'
import About from '@/components/About.vue'

export default {
  name: 'Home',
  components: {
    Welcome,
    About
  },
  data () {
    return {
      hash: null,
    }
  },
  mounted() {
    if (this.$route.hash !== undefined || this.$route.hash !== null ) {
      this.hash = this.$route.hash.substring(1, this.$route.hash.length)
      // this.$nextTick(()=> window.document.getElementById(this.hash).scrollIntoView({}));
      this.$nextTick(()=> this.scrollMeTo(this.hash));
    }
  },
  methods: {
    scrollMeTo (refName) {
      // console.log(refName)
      var element = document.getElementById(refName);
      if (element) {
        var top = element.offsetTop - 48;
        
        window.scrollTo({
          top: top,
          left: 0,
          behavior: 'smooth'
        });
        window.history.replaceState( {} , '', `#${refName}` )
      }

      // // var element = this.$refs[refName];
      // console.log(element)
      // element.scrollIntoView(true);
    }
  }
}
</script>
