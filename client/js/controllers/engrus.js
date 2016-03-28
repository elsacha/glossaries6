angular
  .module('app')
  .controller('EngRusController', ['$scope', 'EngRus', '$http', 'sourceService',
                function($scope, EngRus, $http, sourceService) {
    $scope.sourceTerm =  sourceService.srcTerm;
      
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

//    $scope.addEngRus = function() {
//      EngRus
//        .create($scope.newEngRus)
//        .$promise
//        .then(function(enru) {
//          $scope.newEngRus = '';
//          $scope.engrusForm.content.$setPristine();
//          $('.focus').focus();
//          getEngRus();
//        });
//    };
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
  }]);
