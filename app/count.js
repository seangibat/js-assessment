if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var timer;

      var func = function(){
        if (start <= end){
          console.log(start);
          start++;
          timer = setTimeout(func,100);
        }
      }

      func();

      var something = {
        cancel : function(){
          clearTimeout(timer);
        }
      }

      return something;
    }
  };
});