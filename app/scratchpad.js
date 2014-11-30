var solution = [], array = [1,2,3,4];

var swap = function(n1,n2){
  var holder = array[n1];
  array[n1] = array[n2];
  array[n2] = holder;
};

var heaps = function(n){
  if (n === 1)
    solution.push(array.slice(0));
  else
    for (var i = 0; i < n; i++){
      heaps(n-1);
      if ((n+10) % 2 == 0)
        var j = i;
      else
        var j = 0;
      swap(j,n-1);
    }
};


heaps(4);

console.log(solution);