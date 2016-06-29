(function(){

  angular
    .module('app', ['auth-basic'])
    .run(Run)
    .config(Config)

  function Run (AuthorizerService) {

    var authUser = {
      username:'dawin',
      role:'admin'
    }

    var acl = {
      admin: {
        permissions : ['viewDashboard', 'viewSite']
      },
      user: {
        permissions : ['viewDashboard', 'viewSite']
      },
      anon: {
        permissions : ['viewSite']
      }
    }

    var auth = AuthorizerService(authUser, acl)
    if(auth.canAccess('viewDashboard'))
      console.log('tiene accesso')
    else
      console.log('NO tiene accesso')
  }

  function Config () {
  }
})()
