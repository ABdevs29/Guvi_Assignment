
//Question-3: Explain the below how it works
alert("I'm JavaScript!");
alert('Hello') // Semicolon gets automatically added by JS
alert(`Wor
 ld`) // Here, the words "Wor" and "ld" are showed on separate lines in broswer due to the presence of enter key in between the string "World";
alert(3 +
1
+ 2); // These multiple line of code are working since the task is for adding and the brackets are defined properly. So, the JS Engine will consider those multiple lines of code as the same and execute the addition operation.



//Question-4: Fix the below to alert Guvi geek
let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+ " " +lname; // " " space to be added in between the two strings
alert( admin );



//Question-5: Fix the below to alert sum of two numbers
let fname=10.5; 
fname = "Guvi";
lname = "geek";
let name = fname+ " " + lname; // Add space between Guvi and geek
alert( `hello, ${name}` ); //Use Backticks instead of single or double quotes



//Question-6: Fix the below to alert sum of two numbers
let a = prompt("First number?");
let b = prompt("Second number?");
alert(parseInt(a) + parseInt(b)); //Typecasting to be done before adding



//Question-7: If you run the below scritpt you will get “Code is Blasted”. Explain Why the Code is blasted and how to diffuse it and get “Diffused”.
var a = parseInt("2") > parseInt("12"); //Code was blasting because we had not typecasted the string to number. So, the comparison was not working properly
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}



//Question-8: How to get the success in console.
let a = prompt("Enter a number?"); // We can get Success in console if we don't provide any value in the prompt
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}



//Question-9: How to get the correct score in console.
let value = prompt('How many runs you scored in this ball');
if (parseInt(value) === 4) { //Value variable needs to be typecasted
      console.log("You hit a Four");
} else if (parseInt(value) === 6) { //Value variable needs to be typecasted
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}



//Question-10: Fix the code to welcome the Employee
let login = 'Employee';
let message = (login == 'Employee') ? 'Welcome': //If Employee logs in, display Welcome.
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);



//Question-11: Fix the code to welcome the boss
// You cant change the value of the msg
let message;

if (null || 2 || undefined )
{
 message = "welcome boss"; //Declaration to be done only once for the variable message
}
else
{
 message = "Go away";
}
  console.log(message);



//Question-12: Fix the code to welcome the boss
  let message;
  let lock = null; // Lock variable to be set to either null or left undefined
  //Dont change any code below this 
  if (null || lock || undefined )
  {
    message = "Go away";
  }
  else
  {
   message = "welcome";
  }
    console.log(message);



//Question-13: Fix the code to welcome the boss
let message;
let lock; //Lock variable need to be undefined
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);



//Question-14: Change the code to print 3 2 1
//You can change only 2 characters
let i = 3;
while (i) {
  console.log( i-- );
}



//Question-15: Change the code to print 1 to 10 in 4 lines
let num = 1
console.log(num, num + 1, num +2)
num += 3
console.log(num, num + 1, num +2)
num += 3
console.log(num, num + 1, num +2)
num += 3
console.log(num)



//Question-16: Change the code to print even numbers
//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 2) { //Increment of num by 2
    console.log(num)
  }



//Question-17: Change the code to print all the gifts
let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`); //Use backticks instead of quotes
}



//Question-18: Fix the code to disarm the bomb
let countdown = 100;
while (countdown > 0) {
  countdown--;
  if (countdown == 20) { //Bomb disarmed when countdown hits 20
      console.log("bomb disarmed");
      break;
  }
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}



//Question-19: Whats the msg printed and why?
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi"; //"Hi" gets printed since lemein is a string value
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);

