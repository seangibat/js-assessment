if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var promise = new Promise(function(resolve,reject){
        resolve(value);
      });

      return promise;
    },

    manipulateRemoteData : function(url) {
      var promise = $.get(url).pipe(function(data){
        return data.people.map(function(x){
          return x.name;
        }).sort();
      });

      return promise;
    }
  };
});
