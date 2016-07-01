# angular-auth-basic

## Installing it

**From CDN**
```
<script src="https://cdn.rawgit.com/winos/angular-auth-basic/master/build/js/auth-basic.min.js"></script>
```
## How to use
```js
(function(){

  angular
    .module('app', ['auth-basic'])
    .run(Run)
    .config(Config)

  function Run (AuthorizerService) {

    var authUser = {
      username:'jhonDoe',
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


```
