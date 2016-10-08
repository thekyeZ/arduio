arduio.controller("addSensorController",  function($scope, dataService, $location){

  $scope.pageTitle = "Add sensors";

  $scope.addSubmit = function(data){
      dataService.addNewSensor(data)
      .success(function(response){
          $location.url("/");
      })
      .error(function(response){
        console.log("Something went wrong!");
      });
  }

});
