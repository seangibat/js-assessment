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
      var array = arr, solution = [];

      var swap = function(n1,n2){
        var holder = array[n1];
        array[n1] = array[n2];
        array[n2] = holder;
      };

      var heaps = function(n){
        if (n === 1)
          solution.push(array.slice(0));
        else
          for (var i = 0; i < n; i++){
            heaps(n-1);
            if ((n+10) % 2 == 0)
              var j = i;
            else
              var j = 0;
            swap(j,n-1);
          }
      };

      heaps(4);

      return solution;
    }
  };
});
