<template>
  <div :style="cssProps">
    <v-row no-gutters>
      <v-col cols="12"  md="6" lg=6 sm="12"  class="py-0 my-0 mx-0 px-0">
        <v-img
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
      </v-col>
      <v-col cols="12" md="6" lg=6 sm="12" class="py-0 my-0 mx-0 px-0" align-self="center">
        <v-container class="text-right">
          <span class="display-4 font-weight-bold">WELCOME</span><br/>
          <span class="display-3">My name is <span class="primary--text font-weight-normal">Joseph</span></span> <br/>
          <span class="display-1 font-weight-light">
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
          <v-container class="my-3">
            <v-btn x-large outlined>
              About Me
            </v-btn>
          </v-container>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      cssProps: {
        'background-image': `url(${require('@/assets/bg1.jpg')})`,
        'background-size': `100%`,
        'background-position': `center`,
        'background-repeat': `repeat-y`
      }
    }),
  }
</script>

<style scoped>
#profile1 {
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
}
</style>