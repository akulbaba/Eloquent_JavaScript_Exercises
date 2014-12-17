//Exercise 1

var min = function(x, y) {
  if (x < y) {
    return(x);
  }
  else {
    return(y);
  }
}

console.log(min(-17, 6))



//Exercise 2

var isEven = function(N) {
  if ((N-2) % 2 === 0) {
    return true;
  }
  else {
    return false;
  }
}

console.log(isEven(-1))



//Exercise 3

var countChar = function(string, char) {
  var x = 0;
  for ( var i = 0; i < string.length; i++) {
    if (string.charAt(i) == char)
       x += 1 
     }
  return x;  
};

var countBs = function(string) {
  return countChar(string, "B");
};

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));

console.log(countChar("Balls", "l"));