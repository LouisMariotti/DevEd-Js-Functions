// First we create a function we give it a name then parameter

/* function greet() {
  let name = prompt("What is your name?"); // We called prompt which is another function build in js
  console.log("Welcome to our website " + name); // This is also a build-in function
} */

/* At this point the function will not run cuz Js does not run the
function autimatically, the cool thing is that you can run it when you want
 */

/* greet(); */ // Here we execute the function/ run the function

/* We can complicate this, we are going to do the same thing but we 
are going to complicate it a bit more and we will create another function
for example maybe I want to message to display after I signed-up a
user. So we have our function greet but she's nor going to be execute
as first because we called her in our sign up function. On our sign up 
function we first ask our visitor is name then we called the greet function
and finally to make it work poperly we have to call the sign up function */

function greet(sirname) {
  console.log("Welcome to our website " + sirname); // We create ou greet function, which will dsiplay the message but we're going to use it later on
}

console.log("Rest of the code"); // Not important it's just to show on our console when things are being executed

function signUp() {
  let name = prompt("What is your name?"); // We ask the user is name
  greet(name); // We want to dispaly the message after the user signed up
}

signUp(); // We execute function
/* The above example is not going to work but we will cover it later 
because if we have  alate on the function we don't have access to it 
in another function because let and const are stuck here, but we can 
use the parentheses here for example we put the type of value so we say 
text then.... */

/* We saw that they're a lot of built-in functions like prompt for example
there is the Math.random function, there is also Math.max */

console.log(Math.random()); // this is going to display random number

let maxNr = Math.max(1, 5);
console.log(maxNr); // its going to display 5

// We are going to rebuild the Math.max function

function max(nr1, nr2) {
  if (nr1 > nr2) {
    return nr1;
  } else {
    return nr2;
  }
}

let inbox = max(10, 5);
console.log(inbox);
