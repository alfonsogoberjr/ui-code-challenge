import angular from 'angular'
import oboe from 'oboe'

let autoReload = angular.module('autoReload', [])
  .factory('autoReload', function ($timeout, $interval) {
    "ngInject"
    const connect = (timeout) => {
        if (!timeout) timeout = 3600000
        // Establish streaming HTTP connection for developer auto-reload
        function reload() {
          let count = 8

          $interval(() => {
            console.log(new Array(24 + 1).join('\n'))
            console.log(`Reloading in ${count}s`)
            count--
          }, 1000)

          $timeout(() => {
            console.log('Reloading...')
            window.location.reload()
          }, 8000)
        }
        oboe({
            method: 'GET',
            url: `/autoreload/${timeout}`,
            pattern: '!.*',
        })
          .done(reload)
          .fail(reload)
        window.autoreload = true
    }

    return { connect }
  })
  .name

export {autoReload}
