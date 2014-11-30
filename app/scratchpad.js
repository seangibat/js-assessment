// var func = function(a,b,c){
//   console.log(a,b,c);
// }

// var httpRequest = new XMLHttpRequest();
// httpRequest.onreeadystatechange = func;
// httpRequest.open('GET','https://www.google.com');
// httpRequest.send(null);

var test = new function(){

  this.hey = "heyyy";
  this.whoa = "something";

};

console.log(test.hey, test.whoa);