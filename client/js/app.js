var app = angular
  .module('app', [
    'ui.router',
    'lbServices',
    'angucomplete-alt'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('engrus_search', {
        url: '/engrus_search',
        templateUrl: 'views/engrus_search.html',
        controller: 'EngRusController',
        //authenticate: false
      })
    
    .state('engrus_result', {
        url: '/engrus_result',
        templateUrl: 'views/engrus_result.html',
        controller: 'EngRusController',
        //authenticate: false
      })
    
    .state('engrus_add', {
        url: '/engrus_add',
        templateUrl: 'views/engrus_add.html',
        controller: 'EngRusAddController',
        //authenticate: true
      })
    
    .state('engrus_terms_by_author', {
        url: '/engrus_terms_by_author',
        templateUrl: 'views/engrus_terms_by_author.html',
        controller: 'EngRusTermsByAuthor',
        //authenticate: true
      })
//      .state('all-reviews', {
//        url: '/all-reviews',
//        templateUrl: 'views/all-reviews.html',
//        controller: 'AllReviewsController'
//      })
//      .state('edit-review', {
//        url: '/edit-review/:id',
//        templateUrl: 'views/review-form.html',
//        controller: 'EditReviewController',
//        authenticate: true
//      })
//      .state('delete-review', {
//        url: '/delete-review/:id',
//        controller: 'DeleteReviewController',
//        authenticate: true
//      })
      .state('forbidden', {
        url: '/forbidden',
        templateUrl: 'views/forbidden.html',
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'AuthLoginController'
      })
      .state('logout', {
        url: '/logout',
        controller: 'AuthLogoutController'
      })
//      .state('my-reviews', {
//        url: '/my-reviews',
//        templateUrl: 'views/my-reviews.html',
//        controller: 'MyReviewsController',
//        authenticate: true
//      })
      .state('sign-up', {
        url: '/sign-up',
        templateUrl: 'views/sign-up-form.html',
        controller: 'SignUpController',
      })
      .state('sign-up-success', {
        url: '/sign-up/success',
        templateUrl: 'views/sign-up-success.html'
      });
    $urlRouterProvider.otherwise('engrus_search');
  }])
  .run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(event, next) {
      // redirect to login page if not logged in
      if (next.authenticate && !$rootScope.currentUser) {
        event.preventDefault(); //prevent current page from loading
        $state.go('forbidden');
      }
    });
  }]);
