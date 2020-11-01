<template>
  <div :style="cssProps" class="background">
    <v-container class="about pa-10">
      <div class="text-2 font-weight-bold secondary white--text px-2 text-center rounded-lg" style="width: 300px; margin: auto  ">
        <p>ABOUT ME.</p>
      </div>
      <v-row>
        <v-col cols="12" lg="6" md="12" sm="12" xl="6" class="pr-3">
          <div class="border container-image  primary pa-5 rounded-lg" @click="clickHandle('career')">
            <v-img :src="require('@/assets/work.png')" max-height="250" contain class="image-custom"/>
            <div class="overlay secondary rounded-lg">
              <div class="text white--text">My Career</div>
            </div>
          </div>
          <!-- <v-btn x-large style="height: 250px" block color="primary">
            Work Experience
          </v-btn> -->
        </v-col>
        <v-col cols="12" lg="6" md="12" sm="12" xl="6"  class="pr-3">
          <div class="border container-image primary pa-5 rounded-lg"  @click="clickHandle('project')">
            <v-img :src="require('@/assets/project.png')" max-height="250" contain class="image-custom"/>
            <div class="overlay secondary rounded-lg">
              <div class="text white--text">Project by Me</div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="6" md="12" sm="12" xl="6"  class="pr-3">
          <div class="border container-image primary pa-5 rounded-lg"  @click="clickHandle('organization')">
            <v-img :src="require('@/assets/organization.png')" max-height="250" contain class="image-custom"/>
            <div class="overlay secondary rounded-lg">
              <div class="text white--text">My Organization</div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="6" md="12" sm="12" xl="6" class="pr-3">
          <div class="border container-image primary pa-5 rounded-lg"  @click="clickHandle('contact')">
            <v-img :src="require('@/assets/contact.png')" max-height="250" contain class="image-custom"/>
            <div class="overlay secondary rounded-lg">
              <div class="text white--text">Contact Me</div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      show: false,
      cssProps: {
        'height': '95vh'
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

.container-image {
  position: relative;
  cursor: pointer;
  min-height: 250px;
}

.image-custom {
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 25px;
}
.overlay {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
  height:0;
  transition: .5s ease;
}

.container-image:hover .overlay {
  bottom: 0;
  height: 100%;
  cursor: pointer;
}

.text {
  color: white;
  font-size: 5vh;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>