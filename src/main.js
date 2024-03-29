import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import mitt from 'mitt';
const emitter = mitt();


library.add(faUserSecret)

const app = createApp(App)
app.config.globalProperties.emitter = emitter
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(router).mount("#app");