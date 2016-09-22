arduio.factory("dataService", function($http, $resource, Backand){
  return{
    getSensors: function(){
      return $http.get(Backand.getApiUrl() + '/1/query/data/get_all_sensors', null);
    },
    getValues: function(type){
      console.log(type);
      return $http.get(Backand.getApiUrl() + '/1/query/data/get_all_temperatures', null);
    },
    getValuesBySensor: function(sensor){
      console.log(sensor);
      return $http.get(Backand.getApiUrl() + '/1/query/data/get_by_sensor', {
        params: {
          parameters: {
            querySensor: sensor
          }
        }
      });
    },
    getAllValues: function(){
      return $http ({
        method: 'GET',
        url: Backand.getApiUrl() + '/1/query/data/get_all_values',
        params: {
          parameters: {}
        }
      });
    },
    addNewSensor: function(data){
      return $http ({
        method: 'POST',
        url: Backand.getApiUrl() + '/1/objects/sensors',
        data: {
          "name": data.name,
          "type": parseInt(data.type),
          "active": + data.activated,
          "last_update": new Date()
        }
      });
    },
    deleteSensor: function(sensor){
      return $http ({
        method: 'POST',
        url: Backand.getApiUrl() + '/1/objects/sensors',
        data: {
          "name": data.name,
          "type": parseInt(data.type),
          "active": + data.activated,
          "last_update": new Date()
        }
      });
    }


  };
});
