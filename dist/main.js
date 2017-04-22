/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	import babelpolyfill from 'babel-polyfill'
	import Vue from 'vue'
	import App from './App'
	import ElementUI from 'element-ui'
	import 'element-ui/lib/theme-default/index.css'
	//import './assets/theme/theme-green/index.css'
	import VueRouter from 'vue-router'
	import store from './vuex/store'
	import Vuex from 'vuex'
	//import NProgress from 'nprogress'
	//import 'nprogress/nprogress.css'
	import routes from './routes'
	import Mock from './mock'
	Mock.bootstrap();
	import 'font-awesome/css/font-awesome.min.css'

	Vue.use(ElementUI)
	Vue.use(VueRouter)
	Vue.use(Vuex)

	//NProgress.configure({ showSpinner: false });

	const router = new VueRouter({
	  routes
	})

	router.beforeEach((to, from, next) => {
	  //NProgress.start();
	  if (to.path == '/login') {
	    sessionStorage.removeItem('user');
	  }
	  let user = JSON.parse(sessionStorage.getItem('user'));
	  if (!user && to.path != '/login') {
	    next({ path: '/login' })
	  } else {
	    next()
	  }
	})

	//router.afterEach(transition => {
	//NProgress.done();
	//});

	new Vue({
	  //el: '#app',
	  //template: '<App/>',
	  router,
	  store,
	  //components: { App }
	  render: h => h(App)
	}).$mount('#app')



/***/ })
/******/ ]);