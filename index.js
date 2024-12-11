// EXERCISE I: TYPES
// Add vales to the items array such that assert passes for all the provided types.
let x;
const types = ["string", "string", "number", "string", "string", "number", "object", "undefined", "null"];
const items = ["Rada","Buta",23,"Rada","Buta",1,window,x,null];
items.every((item, index) => console.assert(typeof item === types[index], 'Item at index ' + index + ' is not of type ' + types[index]));

// EXERCISE II: IF-ELSE-ELSE-ELSE
// Write the function such that the assert passes for all the provided inputs.
const ifElseElseElse = (input) => {
 
    if(isNaN(input))
    {
        console.log("The input is not a number :)");
        return 'invalid';
    }
       else {
    if(input<0)
        {
            return 'invalid';
        }
        if(input==0)
        {
            return 'zero';
        }
        if(input > 0){
        if(input % 2 == 0 )
        {
            return 'par';
        }
        else 
        {
            return 'impar';
        }
        }
    }
    


    // Write your code here.
    // The function should assume following:
    //      - if input is less than 0, it should return 'invalid';
    //      - if input is 0 it should return 'zero';
    //      - if input is > 0 it should return 'par' or 'impar' based on the input value;

};

console.assert(ifElseElseElse(243), 'impar');
console.assert(ifElseElseElse(242), 'par');
console.assert(ifElseElseElse(-1), 'unnaceptable');
console.assert(ifElseElseElse(0), 'invalid');

// EXERCISE III: LOOPS
// Write the function such that it adds up all the numbers in the input array and returns the sum.
const loop = (input) => {
    if (typeof input !== 'number' || input < 0) return -Infinity;
    let result = 0;

  for (let i=0;i<= input;i++)
  {
    result=result + i;
  }

    return result;
};

console.assert(loop(5), 15);
console.assert(loop(10), 55);
console.assert(loop(11), 66);


// EXERCISE IV: OBJECTS
// create an object that will allow the check functions to pass
var person;
person ={
    name:'Gelu',
    age:25,
    greet(){
        return 'Hello, my name is Gelu'
    }
}
console.assert(typeof person === 'object', 'Person is not an object');
console.assert(person.name === 'Gelu', 'Person name is not Gelu');
console.assert(person.age === 25, "Person's age is not 25");
console.assert(person.greet() === 'Hello, my name is Gelu', 'Person greet method is not correct');


// EXERCISE V: FUNCTIONS A

// create a function that takes in a string parameter and returns a function 
// that also when called will return the input of the first function and
// conatenate it to the second function's input

function greeterConstructor(greeting) {
     return function  secondFunction(secondInput) {
        return greeting + secondInput;
     }
}

const salute = greeterConstructor('Salut, ');

console.assert(salute('World') === 'Salut, World', 'Greeter constructor is not working');

// EXERCISE VI: SCOPE
// Modify the function such if the iterations exceed 10 concatednated values, 
// it exists early.
// Bonus points: - there are two ways to solve this, can you find both?
const scopedFunction = (iterations = 100) => {
    let concatenatedString = '';
    if(iterations<0)
    {
        return concatenatedString;
    }
    for (let i = 0; i <= iterations; i++) {
        if(i>9)
        {return concatenatedString;
        }
        concatenatedString += i.toString();
    }
    return concatenatedString;
};

const scopedFunction2 = (iterations = 100) => {
    let concatenatedString = '';
    let i=0;
    if(iterations<0)
    {
        return concatenatedString;
    }

      while (i <= iterations )
        {
            if(i==10)
            {
                break;
            }
            concatenatedString += i.toString();
            i++;  
         }
    return concatenatedString;
};

console.assert(scopedFunction(-1) === '', 'Scoped function is not working as expected');
console.assert(scopedFunction(5) === '012345', 'Scoped function is not working as expected');
console.assert(scopedFunction(100) === '0123456789', 'Scoped function is not working as expected');


// BONUS EXERCISE: FUNCEPTION
// Write a function that takes in a number as a parameter and returns a function
// that takes a second number that will add up the two numbers and return the sum.
function adder(number1) { 
 return function sum(number2){
   return number1+number2;
 }
};

console.assert(adder(5)(5) === 10, 'Adder function is not working as expected');
console.assert(adder(10)(5) === 15, 'Adder function is not working as expected');
console.assert(adder(10)(-15) === -5, 'Adder function is not working as expected');