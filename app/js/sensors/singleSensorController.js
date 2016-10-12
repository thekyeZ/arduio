arduio.controller("singleSensorController",  function($scope, dataService , randomDataGenerator, $stateParams, $interval, $filter){

  $scope.pageTitle = "Single Sensor";
  var sensorId = $stateParams.id;

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

  $scope.height_chart = window.innerHeight*0.3;
  $scope.width_chart = document.querySelector(".container").offsetWidth;

  function prepareDataForChart(obj){
    var data = [];
    var labels = [];
    var date, year, month, day, finalDate;
    for(var i=0; i<obj.length; i++){
      data.push(obj[i].value);
      date = new Date(obj[i].timestamp);
      labels.push($filter('date')(date, "dd/MM/yyyy"));
    }
    $scope.labels = labels;
    console.log(data);
    return data;
  }

  $interval(function() {
    dataService.getValuesBySensor(sensorId).success(function(values){
      $scope.values = values;
      $scope.data = [prepareDataForChart(values)];
    });
  }, 1100);


  //$interval(function() {
  //    randomDataGenerator.saveData();
  //}, 1000);

});
