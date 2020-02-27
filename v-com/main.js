import Vue from 'vue';
import App from './App.vue'
import ElementUI from 'element-ui';
import ZfMenu from './components/zf-menu';
import ZfMenuItem from './components/zf-menu-item';
import zfSubmenu from './components/zf-submenu';
Vue.component('ZfMenu', ZfMenu)
Vue.component('ZfMenuItem', ZfMenuItem)
Vue.component('zfSubmenu', zfSubmenu)
Vue.use(ElementUI);
new Vue({
    el:'#app',
    render:h=>h(App)
})