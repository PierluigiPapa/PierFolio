// Import our custom CSS
import './styles/general.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { createApp } from 'vue'

import App from './App.vue'


import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedin);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

