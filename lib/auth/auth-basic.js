(function(w){
  'use strict'
  angular
    .module('auth-basic', ['auth-basic.authorizer'])
    .run()
    .constant('_', w._)

})(window)
