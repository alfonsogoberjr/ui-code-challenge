import angular from 'angular'
import oboe from 'oboe'

let autoReload = angular.module('autoReload', [])
  .factory('autoReload', function () {
    const connect = (timeout) => {
        if (!timeout) timeout = 3600000
        // Establish streaming HTTP connection for developer auto-reload
        function reload() {
          console.log('Reloading...')
          window.location.reload()
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
  .name;

export {autoReload}
