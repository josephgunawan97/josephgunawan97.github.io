<template>
  <div :style="cssProps" class="background">
    <v-container fill-height class="about pa-10">
      <div class="text-2 font-weight-bold primary white--text px-2 text-center rounded-lg" style="width: 300px; margin: auto  ">
        <p>PROJECT.</p>
      </div>
      <v-card>
        <v-tabs 
          dark
          background-color="secondary"
          show-arrows
          :vertical="$vuetify.breakpoint.mdAndUp">
          <v-tabs-slider color="info"></v-tabs-slider>
          <v-tab v-for="(item, index) in tabTitle" :key="index">
            {{item}}
          </v-tab>

          <v-tab-item v-for="(item, index) in tabContent" :key="index">
            <v-card flat>
              <v-card-text>
                <v-row>
                  <v-col 
                    v-for="(image, imageIndex) in item.images" 
                    :key="imageIndex" 
                    :sm="12/item.images.length" 
                    :md="12/item.images.length" 
                    :lg="12/item.images.length"
                    :xs="12/item.images.length"
                    cols="12"
                    >
                    <v-img contain ratio="1" :src="image" max-height="400px"/>
                  </v-col>
                </v-row>
                <v-divider class="my-2"/>
                <p 
                  class="primary--text font-weight-medium my-1"
                  v-for="(description, descriptionIndex) in item.description" 
                  :key="descriptionIndex" >
                  {{description}}
                </p>

              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
      <v-btn x-large outlined color="primary" class="mt-4" @click="clickHandle('about')">
        Back To About 
      </v-btn>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Project',

    data: () => ({
      show: false,
      cssProps: {
        'height': '95vh'
      },
      tabTitle: [
        'Klikdaily',
        'Rudolve',
        `Sit'nShop`
      ],
      tabContent: [
        {
          images: [
            require('@/assets/project/kd2.png'),
            require('@/assets/project/kd1.png'),
          ],
          description: [
            'Working on Marketing Tools for User Engagement and Main Operational System.',
            'This tools consists of several sub-tools such as Voucher, Push Notification, Banner and Campaign System.',
            'Each tool able to perform dynamically to adjust user location, platform and categorize to more personalize.',         
            'Operational System includes Order System via website and application, Warehousing System and Inventory System.'          
          ]
        },
        {
          images: [
            require('@/assets/project/r2.png'),
            require('@/assets/project/r1.png'),
          ],
          description: [
            'Transportation Management System Solution',
            'A system used to manage Delivery Plan where user able to quickly plan drop point sequence by automation, calculate and optimize fleet capacity.',
            'Each fleet has a driver application where each individual able to update their shipping, navigate their next drop point and location tracking.',

          ]
        },
        {
          images: [
            require('@/assets/project/s1.png'),
            require('@/assets/project/s2.png'),
          ],
          description: [
            'Online Canteen for university',
            'An application to help people in university to order foods and beverage via mobile application.',
            'Every stores able to register themselves, set their store info and product to promote their business.',
            'The product is able to delivered by other users who get the opportunity with some payment beneficial.',
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