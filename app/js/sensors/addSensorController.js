arduio.controller("addSensorController",  function($scope, dataService){

  $scope.pageTitle = "Add sensors";

  $scope.addSubmit = function(data){
      dataService.addNewSensor(data)
      .success(function(response){
          console.log("Zapisano!");
      })
      .error(function(response){
        console.log("Something went wrong!");
      });
  }

});
