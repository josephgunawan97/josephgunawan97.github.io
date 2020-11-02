<template>
  <div :style="cssProps" class="background">
    <v-container class="about pa-10" fill-height>
      <div class="text-2 font-weight-bold secondary--text  px-2  rounded-lg" style="width: 300px">
        <p>CONTACT</p>
      </div>
      <v-row no-gutters>
        <v-col cols="12" lg="8" md="12" sm="12" xl="8">
          <v-row>
            <v-col cols="12" lg="6" md="12" sm="12" xl="6" class="pr-3">
              <div style="height: 55px" @click="openEmail" :style="cssCustomBox" class=" rounded-tl-xl rounded-br-xl info">
                <v-row>
                  <v-col cols="3" lg="3" md="3" sm="3" xl="3" class="pa-3">
                    <v-img :src="require('@/assets/social/Email.png')" class="ml-5" contain max-width="30px" max-height="30px" ratio="1"/>
                  </v-col>
                  <v-col cols="9" lg="9" md="9" sm="9" xl="9" class="pr-3">
                    <span class="font-weight-medium text-1 primary--text">{{email}}</span>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6" md="12" sm="12" xl="6" class="pr-3">
              <div style="height: 55px" @click="openFacebook" :style="cssCustomBox" class=" rounded-tl-xl rounded-br-xl info">
                <v-row>
                  <v-col cols="3" lg="3" md="3" sm="3" xl="3" class="pa-3">
                    <v-img :src="require('@/assets/social/Facebook.png')" class="ml-5" contain max-width="30px" max-height="30px" ratio="1"/>
                  </v-col>
                  <v-col cols="9" lg="9" md="9" sm="9" xl="9" class="pr-3">
                    <span class="font-weight-medium text-1 primary--text">{{facebook}}</span>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6" md="12" sm="12" xl="6" class="pr-3">
              <div style="height: 55px"  @click="openInstagram" :style="cssCustomBox" class=" rounded-tl-xl rounded-br-xl info">
                <v-row>
                  <v-col cols="3" lg="3" md="3" sm="3" xl="3" class="pa-3">
                    <v-img :src="require('@/assets/social/Instagram.png')" class="ml-5" contain max-width="30px" max-height="30px" ratio="1"/>
                  </v-col>
                  <v-col cols="9" lg="9" md="9" sm="9" xl="9" class="pr-3">
                    <span class="font-weight-medium text-1 primary--text">{{instagram}}</span>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" lg="6" md="12" sm="12" xl="6" class="pr-3">
              <div style="height: 55px"  @click="openWhatsapp" :style="cssCustomBox" class=" rounded-tl-xl rounded-br-xl info">
                <v-row>
                  <v-col cols="3" lg="3" md="3" sm="3" xl="3" class="pa-3">
                    <v-img :src="require('@/assets/social/Whatsapp.png')" class="ml-5" contain max-width="30px" max-height="30px" ratio="1"/>
                  </v-col>
                  <v-col cols="9" lg="9" md="9" sm="9" xl="9" class="pr-3">
                    <span class="font-weight-medium text-1 primary--text">{{whatsapp}}</span>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="hidden-md-and-down" cols="12" lg="4" md="12" sm="12" xl="4">
          <v-img :src="require('@/assets/social/Contact.png')"/>
        </v-col>
      </v-row>
      
      <v-btn outlined x-large color="primary" class="mt-3" @click="clickHandle('about')">
        Back To About
      </v-btn>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Contact',

    data: () => ({
      facebook: 'JOSEPH GUNAWAN',
      instagram: '@JOSEPH_GUNAWANN',
      whatsapp: '+6281362405715',
      email: 'JOSEPH.GUNAWAN8@GMAIL.COM',
      show: false,
      cssProps: {
        'height': '95vh'
      },
      cssCustomBox: {
        'background': `linear-gradient(75deg, #e7caa9 75px, transparent 20px) !important`,
        'border': `#7c9982 solid 3px`,
        'cursor': `pointer`
      }
    }),
    mounted() {
      this.show = true
    },
    methods: {
      clickHandle (name) {
        this.$emit('on-click', name)
      },
      openEmail () {
        window.location = `mailto:${this.email}`;
      },
      openFacebook () {
        window.open('https://www.facebook.com/josephgunawan97/','_blank')
      },
      openInstagram () {
        window.open('https://www.instagram.com/joseph_gunawann/','_blank')
      },
      openWhatsapp () {
        window.open('https://wa.me/6281362405715','_blank')
      }
    }
  }
</script>

<style scoped>
</style>