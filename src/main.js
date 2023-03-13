/** -- KM Todos App using VueJS - by Med Reda Kamal --
    * Github : www.github.com/medredakamal
    * Portfolio : www.medredakamal.dev
    * LinkedIn : www.linkedin.com/in/medredakamal 
*/

import Vue from "vue";
import router from "./router";

import VueMeta from "vue-meta";
import App from "./App.vue";
import "./index.css";
import "./custom.css";

/* import MotionPlugin */
import { MotionPlugin } from "@vueuse/motion";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faTrashAlt,
  faCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faTrashAlt);
library.add(faCircle);
library.add(faGithub);
library.add(faLinkedin);
library.add(faEnvelope);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

/* Use : Vue Meta */
Vue.use(VueMeta);

/* Use : Motion Plugin */
Vue.use(MotionPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
