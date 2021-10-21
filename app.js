// PRIMITIVE TYLES/VALUES
//სტრინგის ტიპის ველიუ, აქვს ბრჭყალები
let myName = "ilia " ;
let surname = "kimeridze"
console.log(myName + surname);
console.log(`${myName} ${surname}`)

//ნამბერის ტიპის ველიუ , არ აქვს ბრჭყალები
let apple =  8;
let banana = 5;
let pear = 4 ;
let someFruit = 11;
console.log((apple*banana+pear)/someFruit);
console.log(`${myName} ${surname} ${someFruit+apple+banana} years old`);


// boolean-ის ტიპის ველიუ, მხოლოდ ენიჭება true/false
let amIadult = true ;
let amIteenager = false ;


if(amIadult){
    console.log(`i just turned 18`);
} 
else{
    console.log(`i am not 18 yet`);
}


// ნალის ტიპის ველიუ, ნიშნავს არაფერს
// let nothing = null;
// console.log(nothing)
// not defined ტიპის ველიუ, არაფერს ნიშნავს
// let notDefined = undefined;

let modOne = 10 % 2;
let modtwo = 14 % 3
console.log(modOne)
console.log(modtwo)

// 4)მართკუთხედის ფართობი
let width = 7;
let height = 5;
console.log(`მართკუთხედის ფართობი --${width*height}`)


// 5)სამკუთხედის ფართობი

function calcHypotenuse(a, b) {
    return Math.sqrt((b * b) - (a/2 * a/2))*a;
  }
  
  console.log(calcHypotenuse(5, 6));

//6) წრის ფართობი

function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
  }
  
  console.log(calculateCircumference(7));