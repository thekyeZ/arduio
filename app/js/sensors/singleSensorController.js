arduio.controller("singleSensorController",  function($scope, dataService, $stateParams){

  $scope.pageTitle = "Single Sensor";
  var sensorId = $stateParams.id
  //get list of all avaible sensors
  // dataService.getSensors().success(function(sensors){    //wyswielic w widoku
  //     $scope.sensors = sensors;
  //     console.log(sensors);
  // });

  dataService.getValuesBySensor(sensorId).success(function(values){
    $scope.values = values;
  });



});
