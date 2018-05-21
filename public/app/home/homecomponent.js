(function() {
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
