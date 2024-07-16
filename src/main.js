import './styles/general.scss'

import { createApp } from 'vue'

import {router} from './router'

import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faLinkedinIn, faGithub, faHtml5, faBootstrap, faJs, faVuejs, faSass, faPhp, faLaravel, faDeskpro, faCss3, faCss3Alt} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faDownload, faCreditCard, faCloudBolt, faDatabase, faGlobe, faDesktop, faTablet, faMobile, faGamepad, faDragon, faVideo, faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faLinkedinIn, faGithub, faEnvelope, faDownload, faCreditCard, faHtml5, faBootstrap,faJs, faVuejs, faCloudBolt, faSass, faPhp, faDatabase, faLaravel, faGlobe, 
    faDesktop, faTablet, faMobile, faGamepad, faDragon, faCss3Alt, faVideo, faBars
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).mount("#app");

