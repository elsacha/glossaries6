angular
  .module('app')
  .factory('EngRusService', ['EngRus', '$q', '$rootScope', 'AuthService', 'Contributor', function(EngRus, $q,
      $rootScope, AuthService, Contributor) {

    function addEngRus(eng, rus, subject, comment, author, lastUpdated) {
      return EngRus
        .create({
         eng: eng,
         rus: rus,
         subject: subject,
         comment: comment,
         author: author,
         lastUpdated: lastUpdated
       })
       .$promise;
    }

    return {
      addEngRus: addEngRus
    };
  }]);


//.factory('EngRusDisplayByAuthorService', ['EngRus', '$q', '$rootScope', function(EngRus, $q,
//      $rootScope) {
//
//    function displayByAuthor(author) {
//      return EngRus
//        .find({
//         "where":{"author":author}
//       })
//       .$promise;
//    }
//
//    return {
//      displayByAuthor: displayByAuthor
//    };
//  }]);
