<template>
  <div :style="cssProps" class="background">
    <v-container fill-height class="career pa-10">
      <v-row>
        <v-col cols="12" lg="6" md="12" sm="12" xl="6" class="pr-3">
          <p class="text-4 primary--text text-right" style="line-height: 1.0;">
            Career Summary
          </p>
        </v-col>
        <v-col cols="12" lg="6" md="12" sm="12" xl="6" class="pr-3">
          <v-carousel
            :continuous="false"
            delimiter-icon="mdi-circle"
            height="100%"
            class="pb-12"
          >
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :color="item.color"
            >

                <v-card
                  :color="item.color"
                  dark
                >
                  <v-card-title class="title font-weight-medium">
                    <v-row>
                      <v-col>
                        <span class="px-3 text-2">
                            {{item.title}}
                        </span>
                      </v-col>
                    </v-row>
                    <v-spacer/>
                    <v-img ratio="1" :src="item.image" max-width="50px" style="border-radius: 50px"/>
                  </v-card-title>
                  <v-card-text class="white text--primary">
                    <v-container v-for="(sub_task, index) in item.task" :key="sub_task.task" class="my-1 pt-1 pb-0">
                      <v-row no-gutters>
                        <v-col cols='6'>
                          <p class="font-weight-medium secondary--text">{{item.job[index]}}</p>
                        </v-col>
                        <v-col cols='6'>
                          <p class="font-weight-medium secondary--text text-right">{{item.time[index]}}</p>
                        </v-col>
                      </v-row>
                      <v-row v-for="(item,index2) in item.task[index]" :key="index2" no-gutters class="mb-1">
                        <v-col cols="1" >{{index2+1}}.</v-col>
                        <v-col cols="11">{{item}}</v-col>
                      </v-row>
                      <v-divider class="info"/>
                    </v-container>
                    <v-col class="text-right">
                      <v-btn
                        x-large outlined color="primary" class="mt-3"
                        :href="item.web"
                        target="_blank"
                      >
                        Check Website
                      </v-btn>
                    </v-col>
                  </v-card-text>
                </v-card>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-btn x-large outlined color="primary" @click="clickHandle('about')">
        Back To About 
      </v-btn>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Career',

    data: () => ({
      show: false,
      cssProps: {
        'min-height': '95vh',
        'background-image': `url(${require('@/assets/bg1.jpg')})`,
        'background-size': `100%`,
        'background-position': `center`,
        'background-repeat': `repeat-y`
      },
      items: [
        {
          title: 'KLIKDAILY',
          job: ['Senior Product Manager','Product Manager', 'Developer'],
          time: [ 'Nov 2020 - Now','July 2019 - Nov 2020', 'Aug 2018 – Jun 2019'],
          task: [
            [
              'Manage and improve internal tools (Supply Chain Management System, Marketing tools) and customer application (Mitra Klikdaily, KD Sales)',
              'Conduct solution both for operational and end-customer in Fast Moving Consumption Goods and retail industry through inputs and discussions with customers and other stakeholders.',
              'Digitalize over 50 conventional retail and small stores by providing a modern store system in Java and Bali.',
              'Improve Marketing team for engagement and promotion productivity and efficiency with seamless and more functionality system.',
              'Decrease User connection problem by 80% through user login and stability improvement',
            ],
            [
              'Migrate 60% of total registered user from offline to online within 2 months by improving Mitra Klikdaily promotion system.',
              'Delivered a Marketing System to increase engagement by 70% under 3 months through application integration.',
              'Developed Payment Point Online Bank product including the digital payment system (Mobile Banking and E-Wallet).'
            ],
            [
              'Developed Klikdaily Databoard as company Supply Chain Management System to support online orders from application using Vue.js, Node.js and Google Cloud as the core framework.',
              'Created a data integration with Google Datastudio and Big Query for reporting and analytic.'
            ]
          ],
          image: require('@/assets/klikdaily.jpg'),
          color: 'primary',
          web: 'https://www.klikdaily.com'
        },
        // {
        //   title: 'KLIKDAILY',
        //   job: ['Product Manager', 'Developer'],
        //   time: ['July 2019 - Now', 'Aug 2018 – Jun 2019'],
        //   task: [
        //     [
        //       'Manage multiple applications (Mobile and Internal System)',
        //       'Review and monitoring every feature and looking for new improvement',
        //       'Working on requirement documentation, wireframe and timeline planning of each product that will be developed by discussing with stakeholders',
        //       'Experience in Agile Development and Scrum methodology with tools such as Jira and Confluence',
        //       'Experience in gathering, analyzing, and reporting data using BigQuery and Datastudio',
        //       'Manage multiple applications (Mobile and Internal System)',
        //       'Review and monitoring every feature and looking for new improvement',
        //       'Working on requirement documentation, wireframe and timeline planning of each product that will be developed by discussing with stakeholders',
        //       'Experience in Agile Development and Scrum methodology with tools such as Jira and Confluence',
        //       'Experience in gathering, analyzing, and reporting data using BigQuery and Datastudio',
        //     ],
        //     [
        //       'Perform as a full-stack developer for in-house software',
        //       'Working with Vue.js and Firebase NoSQL'
        //     ]
        //   ],
        //   image: require('@/assets/klikdaily.jpg'),
        //   color: 'info',
        //   web: 'https://www.klikdaily.com'
        // },
      ]
    }),
    mounted() {
      this.show = true
    },
    methods: {
      clickHandle (name) {
        this.$emit('on-click', name)
      },
      // goToWeb (url) {
      //   let URL = `${url}`
      //   window.open(URL,'_blank');
      // }
    }
  }
</script>

<style scoped>
</style>