import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import App from './App.vue'
import 'primeicons/primeicons.css';
import { ru } from './helper/local';
import router from './router.ts';
import ToastService from 'primevue/toastservice';
import store from './store/store.ts';
//@ts-ignore
export const vId = window.versionId;
const app = createApp(App);
app.use(PrimeVue, {
    locale: ru,
    theme: {
        preset: Aura,
        colorScheme: 'light',

    }

});
app.use(router);
app.use(ToastService);
app.use(store);
app.mount('#app');
