//Exercise 1

for ( i = "#"; i.length <= 7; i +="#") {
  console.log(i);
};


//Exercise 2

for ( i = 1; i <= 100; i++) {
  if ( i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
  }
  else if (i % 3 === 0) {
    console.log("Fizz");
  }
  else if (i % 5 === 0) {
    console.log("Buzz")
  }
  else {
    console.log(i)
  };
};



//Exercise 3
var string = "";
var size = 8;

for (var y = 1; y < size; y++) {
  for ( var x = 1; x < size; x++) {
       if ((x+y) % 2 === 0) {
         string += "#";
       }
       else {
          string += " ";
       }
    
       };
  string += "\n";
};
  console.log(string);