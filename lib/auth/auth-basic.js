(function(window){
  'use strict'

  angular
    .module('auth-basic', ['auth-basic.authorizer'])
    .run()
    .constant('_', window._)

})(window);
