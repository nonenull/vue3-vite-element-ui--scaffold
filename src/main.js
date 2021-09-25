import {createApp} from 'vue';
import App from './App.vue';
import router from '@/system/router';
import ElementPlus from 'element-plus';
import {Expand as ElementIcons} from '@element-plus/icons';
import 'element-plus/theme-chalk/index.css';
import '@/assets/css/main.css';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.component('ElementIcons', ElementIcons);
app.mount('#app');
