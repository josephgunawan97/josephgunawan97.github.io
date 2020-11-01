import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#355326',
          secondary: '#7c9982',
          accent: '#b39d96',
          info: '#e7caa9',
          background: '#f9f8f6'
        }
      }
    }
  })
  