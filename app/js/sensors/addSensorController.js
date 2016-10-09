arduio.controller("addSensorController",  function($scope, dataService, $location, Notification){

  $scope.pageTitle = "Add sensors";

  $scope.addSubmit = function(data){
      dataService.addNewSensor(data)
      .success(function(response){
          $location.url("/");
          Notification.success('New sensor added to database');

      })
      .error(function(response){
        console.log("Something went wrong!");
      });
  }

});
