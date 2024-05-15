// Import our custom CSS
import './styles/general.scss'


import { createApp } from 'vue'

import App from './App.vue'


import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';

library.add(faLinkedinIn, faGithub, faEnvelope, faDownload);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

