arduio.controller("sensorsController",  function($scope, dataService, Notification){

  $scope.pageTitle = "Sensors";

  //get list of all avaible sensors
    function getSensors(){
        dataService.getSensors().success(function(sensors){
            $scope.sensors = sensors;
        });
    }

   getSensors();

  $scope.deleteSensor = function(sensor){
    dataService.deleteSensor(sensor).success(function(){
        getSensors();
        Notification.primary('Sensor deleted!');
    });
  };






});
