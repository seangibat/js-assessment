if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      // var len = arr.length;
      // for (var x=0; x<len; x++) {
      //   if (item === arr[x]) {
      //     return x;
      //   }
      // }
      // return -1;
      return arr.indexOf(item);
    },

    sum : function(arr) {
      return arr.reduce(function(p,c){
        return p + c;
      },0);
    },

    remove : function(arr, item) {
      while (arr.indexOf(item) != -1){
        arr.splice(arr.indexOf(item),1);
      }

      return arr;
    },

    removeWithoutCopy : function(arr, item) {
      while (arr.indexOf(item) != -1){
        arr.splice(arr.indexOf(item),1);
      }

      return arr;
    },

    append : function(arr, item) {
      // arr[arr.length] = item;
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.splice(arr.length-1,1);
      return arr;
    },

    prepend : function(arr, item) {
      // var arr2 = arr.slice();

      // arr.forEach(function(v,i){
      //   arr2[i+1] = v;
      // });

      // arr2[0] = item;

      arr.unshift(item);
      
      return arr;

    },

    curtail : function(arr) {
      // var arr2 = [];

      // arr.forEach(function(v,i){
      //   if (i !== 0)
      //     arr2[i-1] = v;
      // });

      arr.shift();
      return arr;

    },

    concat : function(arr1, arr2) {
      // arr2.forEach(function(v){
      //   arr1.push(v);
      // });
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index,0,item);
      return arr;
    },

    count : function(arr, item) {
      var count=0;
      arr.forEach(function(v){
        if (item === v)
          count++;
      });
      return count;
    },

    duplicates : function(arr) {
      var result = [];
      
      arr.forEach(function(v,i){
        for (var x=0; x < arr.length; x++) {
          var test = result.some(function(n){ return n === v;});
          if (x !== i && arr[x] === v && !test)
            result.push(v);
        }
      });

      return result;
    },

    square : function(arr) {

      return arr.map(function(v){
        return v * v;
      });

    },

    findAllOccurrences : function(arr, target) {
      var occurs = [];
      arr.forEach(function(v,i){
        if (v === target)
          occurs.push(i);
      });
      return occurs;
      }
  };
});
