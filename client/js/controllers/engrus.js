angular
  .module('app')
  .controller('EngRusController', ['$scope', 'EngRus', '$http', 'sourceService', 'EngRusService',
                function($scope, EngRus, $http, sourceService, EngRusService) {
    $scope.sourceTerm =  sourceService.srcTerm.title;
    //console.log($scope.sourceTerm.title);
      
    $scope.$watch('srcTerm', function() {
       sourceService.srcTerm = $scope.srcTerm; 
    });
//      
//    function getEngRus() {
//      EngRus
//        .find()
//        .$promise
//        .then(function(results) {
//          $scope.engrus = results;
//        });
//    }
//    getEngRus();    
$http.
    get('/api/EngRus/?filter={"where": { "eng": "'+ $scope.sourceTerm + '" } }').
    success(function(data) {
      console.log(JSON.stringify(data));
      //$scope.target = JSON.stringify(data);
        $scope.target = data;
    });

    
//      
//    $scope.searchEngRus = function(term) {
//      EngRus
//        .find($scope.newEngRus)
//        .$promise
//        .then(function(enru) {
//          $scope.newEngRus = '';
//          $scope.engrusForm.content.$setPristine();
//          $('.focus').focus();
//          getEngRus();
//        });
//    };
//
//    $scope.removeEngRus = function(item) {
//      EngRus
//        .deleteById(item)
//        .$promise
//        .then(function() {
//          getEngRus();
//        });
//    };
  }])


.controller('EngRusAddController', ['$scope', 'EngRus', '$http', 'sourceService', 'EngRusService', '$rootScope',
                function($scope, EngRus, $http, sourceService, EngRusService, $rootScope) {
    $scope.addEngRus = function() {
            $scope.newEngRus = {
                                  "eng": $scope.engrus.eng,
                                  "rus": $scope.engrus.rus,
                                  "subject": $scope.engrus.subject,
                                  "comment": $scope.engrus.comment,
                                  "author": $rootScope.currentUser.id,
                                  //"author": "elsacha",
                                  "lastUpdated": new Date()
                               }
            console.log($scope.newEngRus);
          EngRusService.addEngRus(
                                    $scope.newEngRus.eng,
                                    $scope.newEngRus.rus,
                                    $scope.newEngRus.subject,
                                    $scope.newEngRus.comment,
                                    $scope.newEngRus.author,
                                    $scope.newEngRus.lastUpdated
                                 )
            .then(function(engrus) {
              $scope.newEngRus = '';
              //$scope.engrusForm.content.$setPristine();
              $('.focus').focus();
              //getEngRus();
              console.log("eng rus term added");
            });
        };
  }])


//.controller('EngRusTermsByAuthor', ['$scope', 'EngRus',  'EngRusDisplayByAuthorService', '$rootScope',
//                function($scope, EngRus, EngRusDisplayByAuthorService, $rootScope) {
//    $scope.displayTermsByAuthor = function() {
//        EngRusDisplayByAuthorService.displayByAuthor($rootScope.currentUser.id)
//            .then(function(author) {
//              console.log("terms by author displayed");
//              console.log(author);
//              $scope.engrusTermsByAuthor = author;
//              console.log($scope.engrusTermsByAuthor);
//            });
//    };
//  }]);

.controller('EngRusTermsByAuthor', ['$scope', 'EngRus', '$http', '$rootScope', 'EngRusService', 'AuthService',
                function($scope, EngRus, $http, $rootScope, EngRusService, AuthService) {

$http.
    get('/api/EngRus/?filter={"where": { "author": "'+ $rootScope.currentUser.id+ '" } }').
    success(function(data) {
      console.log(JSON.stringify(data));
      //$scope.target = JSON.stringify(data);
        $scope.myTerms = data;
    });

  }])