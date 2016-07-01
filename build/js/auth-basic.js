(function(window){
  'use strict'

  angular
    .module('auth-basic', ['auth-basic.authorizer'])
    .run()
    .constant('_', window._)

})(window);

(function (window) {
	'use strict'

	angular
		.module('auth-basic.authorizer', [])
		.service('AuthorizerService', AuthorizerService)

	function AuthorizerService (_) {

		return function (user, rolesCollection) {
			var permissions = null

			function getPermissions () {
				var permissions = [],
				listPermissions

				for (var i in rolesCollection) {
					_.each(_.values(rolesCollection[i].permissions), function (element) {
						permissions.push(element)
					});
				}

				listPermissions = _.unique(permissions)
				return listPermissions
			}

			function checkPermission (permissions, permission) {
				return permissions.indexOf(permission)
			}

			function getPermissionsByRole (role) {
				return _.values(rolesCollection[role])[0]
			}

			function canAccess (permissions) {
				var permission
				,   access = false

				permission = !checkPermission(getPermissions(), permissions)

				if ( !permission)
					throw 'Bad Permission'

				if (user && user.role)
					access = !checkPermission(getPermissionsByRole(user.role), permissions)

				return access
			}

			return  {
				canAccess: canAccess
			}
		}
	}
})(window);
