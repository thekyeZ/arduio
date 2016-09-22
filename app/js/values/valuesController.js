arduio.controller("valuesController",  function($scope, dataService, $stateParams){

  $scope.pageTitle = "All Values";

  dataService.getAllValues().success(function(data){

    $scope.vals = data;

  }, function(){
      console.log("Data not found");
  });


});
