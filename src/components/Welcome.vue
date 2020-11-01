<template>
  <div :style="cssProps">
    <v-row no-gutters>
      <v-col cols="12"  md="6" lg=6 sm="12"  class="py-0 my-0 mx-0 px-0">
      <transition name="slide">
        <v-img
          v-if="show"
          id="profile1"
          :src="require('../assets/profile1.jpg')"
          aspect-ratio="0.8"
          max-height="100vh"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </transition>
      </v-col>
      <v-col cols="12" md="6" lg=6 sm="12" class="py-0 my-0 mx-0 pr-3" align-self="center">
        <v-container class="text-right">
          <div class="text-4 primary--text font-weight-bold">WELCOME</div>
          <span class="text-3">My name is <span class="primary--text font-weight-normal">Joseph</span></span> <br/>
          <span class="text-2 my-0 py-0 font-weight-light">
            You will know me as 
            <vue-typer  
              class="font-weight-medium"
              :text='["Programmer","Product Manager","Idea Generator", "Consultant"]'
              :repeat='Infinity'
              :shuffle='true'
              initial-action='typing'
              :pre-type-delay='70'
              :type-delay='70'
              :pre-erase-delay='2000'
              :erase-delay='250'
              erase-style='clear'
              :erase-on-complete='false'
              caret-animation='blink'
            ></vue-typer>
          </span>
          <div class="text-2">
            <v-btn color="secondary" x-large dark @click="clickHandle('about')">
              About Me
            </v-btn>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      show: false,
      cssProps: {
        'background-image': `url(${require('@/assets/bg1.jpg')})`,
        'background-size': `100%`,
        'background-position': `center`,
        'background-repeat': `repeat-y`
      }
    }),
    mounted() {
      this.show = true
    },
    methods: {
      clickHandle (name) {
        this.$emit('on-click', name)
      }
    }
  }
</script>

<style scoped>
#profile1 {
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
}
.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(-100%, 0);
}
.slide-leave-to {
  transform: translate(100%, 0);
}

</style>