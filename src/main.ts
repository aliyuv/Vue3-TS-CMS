import { createApp } from 'vue';
import App from './App.vue';
import 'normalize.css';
import './index.css';
import './assets/css/index.less';
import { router } from './router';
import { store } from './store';
import { registerIconComponent } from './global/registerIconComponent';
const app = createApp(App);
app.use(registerIconComponent);
app.use(router);
app.use(store);
app.mount('#app');
