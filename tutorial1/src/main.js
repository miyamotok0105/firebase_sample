// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDE4Kk4lGb_dJXjmgfvz38QWkJ0oDUDVsc',
  authDomain: 'tutorial1-157eb.firebaseapp.com',
  databaseURL: 'https://tutorial1-157eb.firebaseio.com',
  projectId: 'tutorial1-157eb',
  storageBucket: 'tutorial1-157eb.appspot.com',
  messagingSenderId: '460993193951',
  appId: '1:460993193951:web:a33ed0ab56e26e5a'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
