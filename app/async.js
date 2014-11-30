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
      var promise = new Promise(function(resolve,reject){
        var req = new XMLHttpRequest();
        req.open('GET',url);
        req.onload = function(x){
          console.log(req,JSON.parse(req.response).people);
          resolve(JSON.parse(req.response).people);
        }
        req.send();
      });
      console.log(promise);
      return promise;
    }
  };
});
