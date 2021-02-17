<template>
  <div :style="cssProps" class="background">
    <v-container fill-height class="about py-10 px-4">
      <div class="text-2 font-weight-bold accent--text px-2 text-right rounded-lg">
        <p>ORGANIZATION</p>
      </div>
      <v-row>
        <v-col
          v-for="(item, index) in content" :key="index"
          sm="12" 
          md="12" 
          :lg="12/content.length"
          :xs="12/content.length"
          cols="12">
          <v-card>
            <v-card-title class="primary--text">
              <span>{{item.title}}</span><br/>
            </v-card-title>
            <v-card-subtitle>
              <span>{{item.position}}</span>
            </v-card-subtitle>
            <v-card-text >
              <v-img contain ratio="1" class="pt-5" :src="item.images" max-height="250px"/>
            </v-card-text>

            <v-card-text class="accent">
              <p 
                class="white--text font-weight-medium my-1"
                v-for="(description, descriptionIndex) in item.description" 
                :key="descriptionIndex" >
                - {{description}}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-btn x-large outlined color="primary" class="mt-4" @click="clickHandle('about')">
        Back To About 
      </v-btn>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Organization',

    data: () => ({
      show: false,
      cssProps: {
        'min-height': '95vh',
        'background-image': `url(${require('@/assets/bg1.jpg')})`,
        'background-size': `100%`,
        'background-position': `center`,
        'background-repeat': `repeat-y`
      },
      content: [
        {
          images: require('@/assets/organization/mpm.png'),
          title: 'Students Representative Board',
          position: 'Vice Chairman of External Affairs',
          description: [
            'Actively manage relation between organizations in University',
            'Manage and supervise any events held by Students Representative Boards.',
            'Supervise any Student Executive Boards activity and guide them to perform and create better events.'          
          ]
        },
        {
          images: require('@/assets/organization/hmptif.jpg'),
          title: 'Association of Informatics Students',
          position: 'Media Information and Communication',
          description: [
            'In charge of managing and creating content of specific information for Informatics students through both public media and media social.',
            'As part of Student Association, I actively contribute and participate in various events held by the organization.',
            'Participate on competition as represntative'
          ]
        },
        {
          images: require('@/assets/organization/pixagraphica.png'),
          title: 'Pixagraphica',
          position: 'Vice Head / Co-Founder',
          description: [
            'Improve SMAK BPK Penabur multimedia group performance through creating group consist of members with skills in multimedia.',
            'Serve and teach high school students in Design, Comunication and Visual class.',
            'Hired as events multimedia'
          ]
        },
      ]
      
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