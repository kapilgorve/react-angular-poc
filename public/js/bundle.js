(function () {
  'use strict';

  angular.module('starter', ['ui.router', 'react']);
})();

(function () {
  'use strict';

  angular.module('starter').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
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
  }]);
})();
class Test extends window.React.Component {
  render() {
    return React.createElement(
      'h2',
      null,
      ' ',
      this.props.test
    );
  }
}

angular.module('starter').value('Test', Test);
(function () {
  'use strict';

  var home = {
    controller: homeController,
    controllerAs: 'vm',
    templateUrl: `app/home/home.html`
  };

  angular.module('starter').component('home', home);

  angular.module('starter').controller('homeController', homeController);

  function homeController() {
    /* jshint validthis:true */
    var vm = this;
    vm.test = 'React In AngularJs';

    activate();

    function activate() {}
  }
})();
//# sourceMappingURL=maps/bundle.js.map
