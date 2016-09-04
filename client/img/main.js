import angular from 'angular'
import uiRouter from 'angular-ui-router'
import {Common} from './common/common.js'
import {Menu} from './components/menu/menu.js'

angular.module('app', [
    uiRouter,
    Common,
    Menu
  ])
  .config(['$locationProvider', ($locationProvider) => {
    $locationProvider.html5Mode(true)
    $locationProvider.hashPrefix('!')
  }])
  .run(['autoReload', (autoReload) => {
    autoReload.connect(/* add refresh time interval in ms, defaults to 1 hour*/)
  }])
