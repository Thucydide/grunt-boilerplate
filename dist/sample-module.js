(function(){
  define(function(require){
    var module1, div;
    module1 = require('module1');
    div = document.createElement('div');
    return {
      name: 'sample-module',
      module1: module1,
      div: div
    };
  });
}).call(this);
