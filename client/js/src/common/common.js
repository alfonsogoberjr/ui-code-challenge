import angular from 'angular';
import {autoReload} from './autoreload/autoreload.js';
import {menuService} from './menuService/menuService.js';

let Common = angular.module('app.common', [
    autoReload,
    menuService
  ])
  .name;

export {Common}
