if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(window,arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);

    },

    functionFunction : function(str) {
        return function(x){
            return str + ", " + x;
        }
    },

    makeClosures : function(arr, fn) {
        return arr.map(function(v){
            return function(){
                return v * v;
            }
        });

    },

    partial : function(fn, str1, str2) {
        return function(x){
            return fn(str1,str2) + x.substring(0,2);
        }

    },

    useArguments : function() {
        var count = 0;
        for (var x=0; x<arguments.length;x++){
            count += arguments[x];
        }

        return count;
    },

    callIt : function(fn) {
        var args = Array.prototype.slice.call(arguments);
        return fn.apply(window,args.slice(1));
    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
