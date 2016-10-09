arduio.controller("valuesController",  function($scope, dataService, $stateParams, $firebase, $firebaseObject){

  $scope.pageTitle = "All Values";

  //var ref = new Firebase("https://arduio-40e15.firebaseio.com");

  if($stateParams.id){

    dataService.getValueById($stateParams.id).success(function(data){
      $scope.val = data[0];
      console.log(data[0]);
    });
  }else{
    dataService.getAllValues().success(function(data){
      $scope.vals = data;
    });
  }



});
