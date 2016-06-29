(function () {
  'use strict'

  angular
    .module('auth-basic.service', [])
    .service('BasicAuth', BasicAuth)

  function BasicAuth () {
    return {
      login: login,
      logout: logout
    }
  }
})()
