let WahajMathsMark = prompt("Maths Marks");
let WahajScienceMark = prompt("Science Marks");
let WahajComputerMark = prompt("Computer Marks");

result = +WahajComputerMark + +WahajMathsMark + +WahajScienceMark;

if (result >= 280) {
  console.log("GRADE: A+");
} else if (result >= 250) {
  console.log("GRADE: B");
} else {
  console.log("GRADE: C");
}
