if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var s = start;
      var e = end;
      var func = function(){
        if (s < e){
          start++;
          setTimeout(func,100);
        }
        else {
          return true;
        }
      }

      return func();
    }
  };
});