arduio.factory("randomDataGenerator", function($http){
  return {
    saveData: function(){
      return $http({
          method: 'POST',
          url: "htttps://api.backand.com:443/1/objects/values",
          data:
          {
          	"type": 1,
          	"value": (Math.random() * (10.12 - 85.22) + 85.22).toFixed(2),
          	"sensor": 1,
          	"timestamp": Date.now,
          	"place": 1

        }
      });
    }


  }

});
