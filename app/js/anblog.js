var arduio = angular.module("arduio", ['backand', 'ui.router', 'ngResource'])
  .config(function($stateProvider, $urlRouterProvider, BackandProvider){

    BackandProvider.setAppName('arduio');
    BackandProvider.setSignUpToken('f1fad0c9-4302-427a-988d-68d2877b42ca');
    BackandProvider.setAnonymousToken('501575af-13ef-4636-beb1-9c4be3038736');

    $urlRouterProvider.otherwise('/sensors');

    $stateProvider
      // .state('home',{
      //   url: '/',
      //   templateUrl: '/js/main/home.html',
      //   controller: 'homePageController'
      // })
      .state('sensors',{
        url: '/sensors',
        templateUrl: '/js/sensors/index.html',
        controller: 'sensorsController'
      })
      .state('sensor',{
        url: '/sensor/:id',
        templateUrl: '/js/sensors/sensor.html',
        controller: 'singleSensorController'
      })
      .state('sensor_add',{
        url: '/sensor_add',
        templateUrl: '/js/sensors/add.html',
        controller: 'addSensorController'
      })
      .state('values',{
        url: '/values',
        templateUrl: '/js/values/index.html',
        controller: 'valuesController'
      })
      .state('value',{
        url: '/value/:id',
        templateUrl: '/js/sensors/velue.html',
        controller: 'singleValueController'
      })


  })
;
