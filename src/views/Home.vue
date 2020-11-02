<template>
  <div class="home">
    <welcome ref="welcome" class="fl-welcome" @on-click="scrollMeTo"/>
    <about ref="about" id="about" class="fl-about" @on-click="scrollMeTo"/>
    <career ref="career" id="career" class="fl-career" @on-click="scrollMeTo"/>
    <contact ref="contact" id="contact" class="fl-contact" @on-click="scrollMeTo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'
import About from '@/components/About.vue'
import Career from '@/components/Career.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    Welcome,
    About,
    Career,
    Contact,
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
      // var fullpath = this.$route.path +  this.$route.hash

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
      else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });

        window.history.pushState("", document.title, window.location.pathname + window.location.search);
      }

      // // var element = this.$refs[refName];
      // console.log(element)
      // element.scrollIntoView(true);
    }
  }
}
</script>
