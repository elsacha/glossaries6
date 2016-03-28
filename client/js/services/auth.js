angular
  .module('app')
  .factory('AuthService', ['Contributor', '$q', '$rootScope', function(Contributor, $q,
      $rootScope) {
    function login(email, password) {
      return Contributor
        .login({email: email, password: password})
        .$promise
        .then(function(response) {
          $rootScope.currentUser = {
            id: response.user.id,
            tokenId: response.id,
            email: email
          };
        });
    }

    function logout() {
      return Contributor
       .logout()
       .$promise
       .then(function() {
         $rootScope.currentUser = null;
       });
    }

    function register(email, password) {
      return Contributor
        .create({
         email: email,
         password: password
       })
       .$promise;
    }

    return {
      login: login,
      logout: logout,
      register: register
    };
  }]);
