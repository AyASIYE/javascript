

// Draws an equilateral triangle by using for loop
function triangleFor() {
  let number = Number(document.getElementById("number").value);
  let sign = document.getElementById("sign").value;
  let row;
  let column;
  let char;
  console.log('Triangle by for loop')
  for (row = 0; row <= number; row++) {
    for (column = 0; column < row; column++) {
      char += (sign);
    }
    console.log(char);
    char='';
  }
}


// Draws an equilateral triangle by using while loop
function triangleWhile() {
  let number = Number(document.getElementById("number").value);
  let sign = document.getElementById("sign").value;
  let char = sign;
  console.log('Triangle by while loop')
  while(char.length <= number ){
      console.log(char);
      char += (sign);
  }
}

