angular
  .module('app')
  .factory('EngRusService', ['EngRus', '$q', '$rootScope', function(EngRus, $q,
      $rootScope) {

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
