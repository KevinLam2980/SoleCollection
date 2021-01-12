import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from 'jquery';
import {fb}   from './firebase'
import VueFirestore from 'vue-firestore'
import 'popper.js';
import 'bootstrap';
import './assets/styles/app.scss';
import Vue2Filters from 'vue2-filters'
import Swal from 'sweetalert2';
import VueCarousel from 'vue-carousel';
import store from './store.js';
require('firebase/firestore')


Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})
Vue.use(VueFirestore)
Vue.use(Vue2Filters)
Vue.use(VueCarousel);

window.$ = window.jQuery = jQuery;
window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
window.Toast = Toast;

Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('AddToCart', require('./components/AddToCart.vue').default);
Vue.component('MiniCart', require('./components/MiniCart.vue').default);
Vue.component('ProductsList', require('./sections/ProductList.vue').default);


Vue.config.productionTip = false;

let app = '';

fb.auth().onAuthStateChanged(function(user) {

  if(!app){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
    
  }

});

