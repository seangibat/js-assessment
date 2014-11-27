if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.apply(obj);
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var result = [];
      for (x in obj) {
        if (obj.hasOwnProperty(x))
          result.push(x + ": " + obj[x]);
      }
      return result;
    }
  };
});
