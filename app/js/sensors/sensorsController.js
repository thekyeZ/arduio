arduio.controller("sensorsController",  function($scope, dataService){

  $scope.pageTitle = "Sensors";

  //get list of all avaible sensors
  dataService.getSensors().success(function(sensors){    //wyswielic w widoku
      $scope.sensors = sensors;
      console.log(sensors);
  });


});
