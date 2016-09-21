arduio.controller("homePageController",  function($scope, dataService){

  $scope.pageTitle = "Home";

  // //get list of all avaible sensors
  // dataService.getSensors().success(function(sensors){    //wyswielic w widoku
  //     console.log(sensors);
  // });

  //get values
  dataService.getValues("kupa").success(function(values){    //wyswielic w widoku
      console.log(values);
  });
  //select * from `temperature` where `sensor`;
});
