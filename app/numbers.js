if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        return (num & (1 << bit-1)) >> (bit-1);
    },

    base10: function(str) {
        return parseInt(str,2);
    },

    convertToBinary: function(num) {
        var string = "000000" + num.toString(2);
        string = string.slice(string.length-8);
        return string;
    },

    multiply: function(a, b) {
        return (a*100)*(b*100)/10000;
    }
  };
});

