import angular from 'angular'

let menuService = angular.module('menuService', [])
  .factory('menuService', function ($http) {
    "ngInject"

    const successHandler = (res) => res.data.data
    const errorHandler = console.error

    const getMenuItems = () => $http({ method: 'GET', url: '/api/v1/menu' }).then(successHandler, errorHandler)

    return { getMenuItems }
  })
  .name;

export {menuService}
