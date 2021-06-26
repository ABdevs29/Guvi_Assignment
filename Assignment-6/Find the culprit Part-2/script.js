//Question-1: Write a code to print the numbers in the array. Output: 1234567891011
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) { //i to be initialised to 0 referencing first index in array and i to be incremented till i = 10
 new_string += numsArr[i] 
}
console.log(new_string);



//Question-2: Write a code to print the numbers in the array. Output: 1,2,3,4,5,6,7,8,9,10,11
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i < 11; i++) { //i to be initialised to 0 for referencing the first index in array
  if (i == 10) {
    new_string += numsArr[i]; //When the index is 10 "," need not be added since it is the last element
  } else {
    new_string += numsArr[i] + ","; // , to be added in double quotes ","
  }
}
console.log(new_string);



//Question-3: Write a code to print from last to first with spaces (Make sure there is no space after the last element 1). Output: 11 10 9 8 7 6 5 4 3 2 1
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; //numsArr to be defined with array from 1 to 11
var new_string = "";
 
for (var i = 10; i >= 0; i--) { //i to be initialised at 10 referencing the last index of the array and decremented till i = 0
  if (i == 0) {
    new_string += numsArr[i]; //when i is 0, extra space need not be added
  } else {
    new_string += numsArr[i] + " ";
  }
}
console.log(new_string);



//Question-4: Write a code to replace the array value — If the number is even, replace it with ‘even’. Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] % 2 == 0 )
 {
 numsArr[i] = "even"; // if the value is divisible by 2, that item to be replaced with "even"
 }
}
console.log(numsArr);



//Question-5: Write a code to replace the array value — If the index is even, replace it with ‘even’. Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(i % 2 == 0 )  //when the index i is even, the item will be replaced with "even"
 {
 numsArr[i] = "even";
 }
}
console.log(numsArr);



//Question-6: Write a code to add all the numbers in the array. Output: 66
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0; //sum variable needs to be initialised to 0 outside the for loop to avoid change in variable with every loop
for (var i = 0; i <=10; i++) {
 sum += numsArr[i];
}
console.log(sum);



//Question-6: Write a code to add the even numbers only. Output: 30
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <10; i++) {
 if(numsArr[i] % 2 == 0) {
  sum += numsArr[i]; //adding of even numbers needs to be done inside the if condition of number being even
 }
}
console.log(sum);



//Question-6: Write a code to add the even numbers and subract the odd numbers. Output: 94
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i] % 2 == 0) //If number is even, then add the value to sum. Semicolon to be avoided after if condition
 {
 sum += numsArr[i]
 } else
 {
 sum -= numsArr[i]
 }
}
console.log(sum);



//Question-7: Write a code to print inner arrays. Output: Array(5) [ 1, 2, 3, 4, 5 ] Array(6) [ 6, 7, 8, 9, 10, 11 ]
var numsArr = [[1, 2, 3, 4, 5], [ 6, 7, 8, 9, 10, 11]]; // , to be provided between the two inner arrays
for (var i = 0; i < numsArr.length; i++) { //Semicolon to be avooided after for statement
 console.log( numsArr[i])
}



//Question-8: Write a code to print elements in the inner arrays. Output: 1234567891011
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all= ""; // str_all variable needs to be initialised to empty string as we will be using it as a string inside our loops
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length; j++) { // j to be incremented
  str_all += inner_array[j];
 } 
}
console.log(str_all);




//Question-9: Write a code to replace the array value — If the index is even, replace it with ‘even’. Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
var previous_array = []; //Created empty array to store previous inner array
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ) { //j to be incremented
      if (previous_array.length % 2 == 0) { //If previous_array length is odd, the even indexes in the inner_array will be set to "even"
        if(j % 2 == 0 )
      {
         inner_array[j] = "even";
       }
      } else { //If previous_array length is even, the odd indexes in the inner_array will be set to "even"
        if(j % 2 != 0 )
      {
         inner_array[j] = "even";
       }
      }

}
previous_array = inner_array;
}
console.log(numsArr);


//Question-10: Write a code to print elements in the inner arrays in reverse. Output: 11 10 9 8 7 6 5 4 3 2 1
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all= ""; //str_all to be initialised to an empty string as we will be using it as a string for our output
for (var i = numsArr.length - 1; i >= 0; i--) { //numsArr index to be decremented to take values from reverse
 var inner_array = numsArr[i];
 for(var j = inner_array.length - 1; j >= 0 ; j--) //j variable to be initialised to the last element of inner_array i.e. inner_array.length-1 & decremented till j >= 0
     str_all +=inner_array[j] + " "; //extra space to be added after every value
}
console.log(str_all.trim()); //trim function added to remove extra space after the end of our output



//Question-11: Write a code to add elements in the inner arrays based on odd or even values. Output: 36 30
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(inner_array[j] % 2 != 0) // If the Inner array value is odd, the value to be added to sum of odds
 {
 sum_odd += inner_array[j];// If the Inner array value is odd, the value to be added to sum of odds
 }
 else
 {
 sum_even += inner_array[j];// If the Inner array value is even, the value to be added to sum of evens
 }
}
}
console.log(sum_odd);
console.log(sum_even);
