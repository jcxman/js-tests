exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    return fn.apply(obj);
  },

  alterObjects : function(constructor, greeting) {
    return constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    var ret = [];

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        ret.push(prop + ': ' + obj[prop]);
      }
    }

    return ret;
  }
};
