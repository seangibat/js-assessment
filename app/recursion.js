if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {

      var recurse = function(arr, dirName){
        var list = [];
        
        for (x in arr){
          if (x === 'files')
            arr[x].forEach(function(item){
              if (typeof item === 'string' && (typeof dirName === "undefined" || arr.dir === dirName))
                list.push(item);
              else if (typeof item === 'object' && (typeof dirName === "undefined" || arr.dir !== dirName))
                list = list.concat(recurse(item, dirName));
              else
                list = list.concat(recurse(item, arr.dirName));
            });
        }
        return list;
      };

      return recurse(data, dirName);
    },

    permute: function(arr) {
      
    }
  };
});
