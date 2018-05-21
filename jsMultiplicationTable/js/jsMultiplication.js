// Draws multiplication table by for loop
function multiplicationTable() {
  let n = Number(document.getElementById("number").value);
  let table = '\n';
   for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
           table += (r*c) + ' ';
        }
        table += '\n'
    }
    console.log('Multiplication table by for loop');
    console.log(table);
 }