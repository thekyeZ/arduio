arduio.controller("sensorsController",  function($scope, dataService, Notification){

  $scope.pageTitle = "Sensors";

  //get list of all avaible sensors
  dataService.getSensors().success(function(sensors){
      $scope.sensors = sensors;
      console.log(sensors);
  });

  $scope.deleteSensor = function(sensor){
    dataService.deleteSensor(sensor).success(function(data){
        Notification.success('Success notification');
        dataService.getSensors();
    });
  };






});
