import App from './App.vue'

import { gripVueJsApp } from '@stakeordie/griptape-vue.js'

//import { sharedKey } from 'curve25519-js';

import "~/@stakeordie/griptape-vue.js/dist/style.css"

import '@/assets/styles/index.scss'

// Griptape config
const conf = {
  restUrl: 'https://api.holodeck.stakeordie.com'
}

// Grip the vue app
gripVueJsApp(conf, App, (app, pinia) => {})