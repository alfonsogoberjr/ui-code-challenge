import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './menu.html';
import {MenuCtrl} from './menu.controller.js';

let Menu = angular.module('menu', [
    uiRouter
  ])
  .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    console.log('configuring menu...')
    $urlRouterProvider.otherwise('/menu')

    $stateProvider
      .state('menu', {
        url: '/menu',
        controller: 'menuCtrl',
        template
      });
  }])
  .controller('menuCtrl', MenuCtrl)
  .name

export {Menu};
