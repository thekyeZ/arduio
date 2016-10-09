arduio.factory("randomDataGenerator", function($http){
  return {
    saveData: function(){
      return $http({
          method: 'POST',
          url: "https://api.backand.com:443/1/objects/values",
          data:
          {
          	"type": 1,
          	"value": (Math.random() * (10.12 - 85.22) + 85.22).toFixed(2),
          	"sensor": 47,
          	"timestamp": Date.now(),
          	"place": 1

        }
      });
    },
    generateDate: function(start, end){
            return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

  }

});
