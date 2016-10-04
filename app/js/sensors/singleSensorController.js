arduio.controller("singleSensorController",  function($scope, dataService , randomDataGenerator, $stateParams, $interval){

  $scope.pageTitle = "Single Sensor";
  var sensorId = $stateParams.id
  //get list of all avaible sensors
  // dataService.getSensors().success(function(sensors){    //wyswielic w widoku
  //     $scope.sensors = sensors;
  //     console.log(sensors);
  // });



  $interval(function() {
    dataService.getValuesBySensor(sensorId).success(function(values){
      $scope.values = values;
    });
  }, 1100);


  //$interval(function() {
  //    randomDataGenerator.saveData();
  //}, 1000);

});
