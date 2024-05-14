import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedin);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

