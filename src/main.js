import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueTyperPlugin from 'vue-typer'
import VueMeta from 'vue-meta'

Vue.use(VueTyperPlugin)
Vue.use(VueMeta)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App),
  metaInfo() {
    return { 
        title: "Welcome to My Page - Josephgunawan97",
        meta: [
          { name: 'description', content:  'Welcome to my page. My name is Joseph, take a look at my profile to get know about me and my works' },
          { property: 'og:title', content: "Welcome to my page - Josephgunawan97" },
          { property: 'og:site_name', content: 'josephgunawan97' },
          { property: 'og:type', content: 'website' },    
          { property: 'og:url', content: 'https://josephgunawan97.github.io' },
          { name: 'robots', content: 'index,follow' } 
        ]
    }
}
}).$mount('#app')
