//Question-1: Fix the code to get the largest of three.
aa = (f,s,t) => { // f, s & t get declared when we consider them as arguments for this arrow function
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);




//Question-2: Fix the code to Sum of the digits present in the number
let n = 123;
console.log(add(n));
function add(n)
{
let sum = 0; // sum variable is initialised to zero
n = n.toString().split(""); // our input is first converted to a string and then the digits get split
for(var i=0;i<n.length;i++){
 sum += parseInt(n[i]); // sum value gets added with typecasted digits from our string
 }
 return sum;
}



//Question-3: Fix the code to Sum of all numbers using IIFE function
const arr = [9,8,5,6,4,3,2,1];
(function(arr) { // Array to be passed in argument of iife function
 let sum = 0;
 for (var i = 0; i < arr.length; i++){ // ; to be avoided after for loop
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})(arr); // Input needs to be given



//Question-4: Fix the code to gen Title caps.
var arr = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i < arro.length; i++) { //i to be iterated till i < arro.length
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano(arr); //Input need to be passed to invoke the function




//Question-5: Fix the code to return the Prime numbers
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{ //.filter is used on the newArray with num as argument
 for(let i=2;i<=num;i++){ //num value checking starts from 2
     if (num == 2|| num == 3 || num == 5 || num == 7) { //If num is either 2,3,5,7 then it is a prime number
         return true;
     } else if(num % 2==0 && num % 3 == 0 && num % 5 == 0 && num % 7 == 0) { //If num is divisible by either 2,3,5,7 then it is not a prime number
         return false;
     }
 }
});
console.log(myPrime);



//Question-6: Fix the code to sum the number in that array
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) =>
 a + b
const new_sum = num.reduce(sum) //created new_sum variable
console.log(new_sum);



//Question-7: Fix the code to rotate an array by k times and return rotated array using IIFE function
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr.length % k;
(function(arr) { //Passed the array as an argument for the function
 out = arr.slice(k + 1, arr.length); // arr = {} line was deleted as arr was added as argument to the function
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);})(arr); //Passed the array as an argument for the function



//Question-8: Fix the code to gen Title caps.
 var arr = ["guvi", "geek", "zen", "fullstack"];
(function() {
 for (var i = 0; i < arr.length; i++) { //i to be iterated till i < arro.length
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1)); // 1st character of arr[i] needs to be uppeer cased i.e. arr[i][0]
 }
})();



//Question-9: print all odd numbers in an array using IIFE function
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !== 0) { // If arr[i] is not perfectly divisible by 2
 console.log(arr[i]);
 }}
})();



//Question-10: Fix the code to reverse.
(function(str){
    str1 = str.split("").reverse().join(""); //split the string with no spaces in between
    console.log(str1); 
   })("abcd");



//Question-11: Fix the code to remove duplicates.
var res = function(arr){
newArr = []; //Empty newArray to be initilaised outside the for loop
for(var i=0; i < arr.length; i++){
if(newArr.indexOf(arr[i]) == -1) {
newArr.push(arr[i]);
} }
console.log(newArr);
}
res(["guvi","geek","guvi","duplicate","geek"]);



//Question-12: Fix the code to give the below output:
var array =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
var final=[]
var new_object = {}; //new_object to be created 
var final = []; //final to be initialised to an array
while(array.length!=0) {
    var outer_remove = array.shift();
    new_object = {}; //new_object to be made empty at the start of each iteration
    while(outer_remove.length!=0){
        var inner_remove = outer_remove.shift();
        var key = inner_remove[0];
        var value =inner_remove[1];
        new_object[key]=value;
    }
    final.push(new_object);
}
console.log(final); //final value ot be consoled



//Question-13: Sum of odd numbers in an array
var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c){
 if(c % 2 != 0)
 {
 return a + c;
 }
 return a;
}, 0); //Total a needs to be initialised to 0
console.log(s);



//Question-14: Swap the odd and even digits
aa = data=>{
    var a=data;
    var l=""; //l value ot be initalised outside the for loop
   for(i=0;i<a.length;i++){ // i to be iterated from 0 to a.length-1
    var s=a[i+1]
    var b=a[i]
    l+=s
    l+=b
    i++;
   }
   if((a.length%2)!=0){
    l+=a[a.length-1]
   }
   console.log(l);
   }
   aa("1234");


