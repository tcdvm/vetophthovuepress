import VueTypedJs from "vue-typed-js";
import EasySlider from 'vue-easy-slider';
// import Vuetify from "vuetify";
// import "vuetify/dist/vuetify.min.css";
// import VueCarousel from 'vue-carousel';


export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  if (typeof process === "undefined") {
    // process is undefined in a browser
    Vue.use(VueTypedJs);
    Vue.use(EasySlider);
  }
  // Vue.use(Vuetify);
  // options.vuetify = new Vuetify({});
};
