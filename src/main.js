// Vue
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import items from "@/features/items/list.vue";

const pinia = createPinia(); //Creates store. 
const app = createApp(items);

app.use(pinia);
app.mount('#app');