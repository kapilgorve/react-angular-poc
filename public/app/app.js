(function() {
  'use strict';

  angular.module('starter', ['ui.router', 'react']);
})();

(function() {
  'use strict';

  angular.module('starter').config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
      $locationProvider.hashPrefix('');
      // use the HTML5 History API
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/home');

      $stateProvider

        // HOME STATE ========================================
        .state('home', {
          url: '/home',
          component: 'home'
        });
    }
  ]);
})();
