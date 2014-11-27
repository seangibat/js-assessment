if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var re = /\d+/g;
        return re.test(str);
    },

    containsRepeatingLetter : function(str) {
        var re = /([a-z])\1/gi;
        return re.test(str);
    },

    endsWithVowel : function(str) {
        var re = /[aeiou]\b/gi;
        return re.test(str);
    },

    captureThreeNumbers : function(str) {
        var re = /\d{3}/g;
        var result = re.exec(str);
        if (result !== null)
            return result[0];
        else
            return false;
    },

    matchesPattern : function(str) {
        var re = /\b\d{3}-\d{3}-\d{4}\b/g;
        return re.test(str);
    },
    isUSD : function(str) {
        var re = /^\$\d{1,3}((,\d{3})+)?(\.\d{2})?$/g;
        return re.test(str);
    }
  };
});
