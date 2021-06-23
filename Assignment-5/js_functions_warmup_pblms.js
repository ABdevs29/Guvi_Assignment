//Write a function called “addFive”
let num = 10;
function addFive (n) {
    let sum = n + 5;
    return sum;
}
console.log(addFive(num));


//Write a function called “getOpposite”
let num = "5a"
function getOpposite (n) {
    if (n == parseInt(n)) {
        return -1 * n;
    } else {
        return -1;
    }
}
console.log(getOpposite(num));


//Fill in your code that takes an number minutes and converts it to seconds
let minutes = 5;
function toSeconds (minutes) {
    return minutes * 60;
}
console.log(toSeconds(minutes));


//Create a function that takes a number as an argument, increments the number by +1 and returns the result
let num = -3;
function nextNumber (n) {
    return n + 1;
}
console.log(nextNumber(num));


//Create a function that takes an array and returns the first element
let arr = [-500, 0, 50];
function getFirstElement (array) {
    return array[0];
}
console.log(getFirstElement(arr));


//Convert Hours into Seconds
let hours = 24;
function hourToSeconds (hrs) {
    return hrs * 60 * 60;
}
console.log(hourToSeconds(hours));


//Create a function that takes height and width and finds the perimeter of a rectangle
let height = 2;
let width = 9;
function findPerimeter (h,w) {
    return 2 * (h + w);
}
console.log(findPerimeter(height, width));


//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false
let num1 = 83
let num2 = 34;
function lessThan100 (number1, number2) {
    if (number1 + number2 < 100) {
        return true;
    } else {
        return false;
    }
}
console.log(lessThan100(num1, num2));


//The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value
let num1 = -9;
let num2 = 45;
function remainder(number1, number2) {
    return number1 % number2;
}
console.log(remainder(num1, num2));


//MacDonald is asking you to tell him how many legs can be counted among all his animals.
let noOfTurkeys = 5;
let noOfHorses = 2;
let noOfPigs = 8;
function countAnimals (tur, horse, pigs) {
    return (tur * 2) + (horse * 4) + (pigs * 4);
}
console.log(countAnimals(noOfTurkeys, noOfHorses, noOfPigs));


//Create a function that returns the number of frames shown in a given number of minutes for a certain FPS
let noOfFrames = 10;
let noOfMinutes = 25;
function framesPerSecond (num1, num2) {
    return num1 * num2 * 60;
}
console.log(framesPerSecond(noOfFrames, noOfMinutes));


//Check if an Integer is Divisible By Five
let num = -55;
function divisibleByFive (n) {
    if (n % 5 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(divisibleByFive(num));


//Given a number, “isEven” returns whether it is even
let num = 11;
function isEven (n) {
    if (n == parseInt(n)) {
        if (n % 2 == 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return -1;
    }
}
console.log(isEven(num));


//Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd
let num1 = 2;
let num2 = 3;
function areBothOdd (n1, n2) {
    if (n1 % 2 != 0 && n2 % 2 != 0) {
        return true;
    } else {
        return false;
    }
}
console.log(areBothOdd(num1, num2));


//Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space
let firstName = "Guvi";
let lastName = "Geek";
function getFullName (name1, name2) {
    return name1 + " " + name2;
}
console.log(getFullName(firstName,lastName));


//Given a word, “getLengthOfWord” returns the length of the given word
let word = "GUVI";
function getLengthOfWord (word) {
    let result = -1;
    if (word != undefined && word != parseInt(word)) {
        result = word.split("").length;
    }
    return result;
}
console.log(getLengthOfWord(word));


//Given two words, “isSameLength” returns whether the given words have the same length
let str1 = "GUVI";
let str2 = "GEEK";
function isSameLength (s1, s2) {
    if (s1.length == s2.length) {
        return true;
    } else {
        return false;
    }
}
console.log(isSameLength(str1, str2));


//Create a function to calculate the distance between two points defined by their x, y coordinates
let point1 = [100, 100];
let point2 = [400, 300];
function getDistance (x1, y1, x2, y2) {
    return Math.round(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
}
console.log(getDistance(point1[0], point1[1], point2[0], point2[1]));


//Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’
let arr = [1, 3, 5];
let n = 1;
function getNthElement (array, index) {
    if (array.length == 0) {
        return undefined;
    } else {
        return array[index];
    }
}
console.log(getNthElement(arr, n));


//Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’
let arr =  [1, 2, 3, 4];
function getLastElement (arr) {
    if (arr.length == 0) {
        return -1;
    } else {
        return arr[arr.length - 1];
    }
}
console.log(getLastElement(arr));


// Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined
let obj = {
    name : "Abhishek",
    age : 27,
    dob : "29th August, 1993",
    native : "Karwar"
}
let key = "age";
function getProperty (obj, key) {
    for (let i in obj) {
        if (i == key) {
            return obj[i];
        }
    }
    return undefined;
}
console.log(getProperty(obj, key));


//Given an object and a key, “addProperty” adds a new property on the given object with a value of true
let obj = {
    name : "Abhishek",
    age : 27,
    dob : "29th August, 1993",
    native : "Karwar"
}
let key = "Mother Tongue";
function addProperty (obj, key) {
    obj[key] = "Konkani";
    return obj;
}
console.log(addProperty(obj, key));


//Given an object and a key, “removeProperty” removes the given key from the given object
let obj = {
    name : "Abhishek",
    age : 27,
    dob : "29th August, 1993",
    native : "Karwar"
}
let key = "dob";
function removeProperty (obj, key) {
    delete obj[key];
    return obj;
}
console.log(removeProperty(obj, key));


//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers
let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function countPositivesSumNegatives (arr) {
    let countPositive = 0;
    let SumNegative = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            countPositive++;
        } else {
            SumNegative += arr[i];
        }
    }
    return [countPositive, SumNegative];
}
console.log(countPositivesSumNegatives(arr));


//Create a function that receives an array of numbers and returns an array containing only the positive numbers
let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function getPositives (arr) {
    let result = []
    for (let i = 0, j = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            result[j] = arr[i];
            j++;
        }
    }
    return result;
}
console.log(getPositives(arr));


//Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent)
let n = 11;
function powersOfTwo (n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
        result[i] = Math.pow(2, i);
    }
    return result;
}
console.log(powersOfTwo(n));


//Find the maximum number in an array of numbers
let arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function findMax (a) {
    let max = arr[0];
    for (let i in arr) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));


//Print the first 100 prime numbers
let n = 100;
function printPrimes (n) {
    let result = [];
    for (let i = 2, j = 0; i < 1000; i++) {
        if (i == 2 || i == 3 || i == 5 || i ==7) {
            result[j] = i;
            j++;
        }
        else if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
            result[j] = i;
            j++;
        }
        if (j == n - 1) {
            return result;
        }
    }
}
console.log(printPrimes(n));


//Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”
let startNum = 25;
let n = 20;
function printPrimes (n, startAt) {
    let result = [];
    for (let i = startAt, j = 0; i < startAt + n * 10; i++) {
        if (i == 2 || i == 3 || i == 5 || i ==7) {
            result[j] = i;
            j++;
        }
        else if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
            result[j] = i;
            j++;
        }
        if (j == n) {
            return result;
        }
    }
}
console.log(printPrimes(n, startNum));


//Reverse a string
let str = "javascript";
function reverseString (str) {
    let result = "";
    for (let i = str.length - 1 ; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log(reverseString(str));


//Create a function that will merge two arrays and return the result as a new array
let ar1 = [1, 2, 3];
let ar2 = [4, 5, 6];
function mergeArrays (ar1, ar2) {
    let result = ar1 + "," + ar2;
    return result;
}
console.log(mergeArrays(ar1, ar2));


//Calculate the sum of numbers received in a comma delimited string
let str = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";
function sumCSV (s) {
    let nums = s.split(",");
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += parseFloat(nums[i]);
    }
    return sum;
}
console.log(sumCSV(str));
