var arduio = angular.module("arduio", ["firebase", 'backand', 'ui.router', 'ngResource', 'ui-notification', 'chart.js'])
  .config(function($stateProvider, $urlRouterProvider, BackandProvider, ChartJsProvider){

      //NotificationProvider.setOptions({
      //    delay: 10000,
      //    startTop: 20,
      //    startRight: 10,
      //    verticalSpacing: 20,
      //    horizontalSpacing: 20,
      //    positionX: 'left',
      //    positionY: 'bottom'
      //});
      //
      ChartJsProvider.setOptions({
          chartColors: ['#Fa4252', '#ee8A80'],
          responsive: false
      });
      // Configure all line charts
      ChartJsProvider.setOptions('line', {
          showLines: true
      });

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
        templateUrl: '/js/values/value.html',
        controller: 'valuesController'
      })


  })

;
