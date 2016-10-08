arduio.controller("valuesController",  function($scope, dataService, $stateParams, $firebase, $firebaseObject){

  $scope.pageTitle = "All Values";

  var ref = new Firebase("https://arduio-40e15.firebaseio.com");


  dataService.getAllValues().success(function(data){

    $scope.vals = data;


  }, function(){
      console.log("Data not found");
  });

  $scope.data = $firebaseObject(ref);

});
