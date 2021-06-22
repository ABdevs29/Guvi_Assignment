//Print odd numbers in an array
let arr = [12, 11, 15, 18, 5];

let odd = (a) => {
    let sum = 0;
    for (let i = 1; i < a.length; i = i + 2) {
        sum += a[i];
    }
    return sum;
};
console.log(odd(arr));



//Convert all the strings to title caps in a string array
let str = ["this", "sentence", "is", "in", "title", "caps"];

let title = (s) => {
    for (let i = 0; i < s.length; i++) {
        let strBreakUp = s[i].split("");
        if (strBreakUp.length >= 4) {
            strBreakUp[0] = strBreakUp[0].toUpperCase();
        }
        s[i] = strBreakUp.join("");
    }
    return s;
};
console.log(title(str));



//Sum of all numbers in an array
let arr = [1, -1, 11, "disney", 27, 84, -86, "xt"];

let add = (a) => {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == parseInt(a[i])) {
            sum += a[i];
        }
    }
    return sum;
};
console.log(add(arr));



//Return all the prime numbers in an array
let arr = [7, 13, 587, 49, 7457, 22, 78];

let prime = (a) => {
    let result = [], count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == 2 || a[i] == 3 || a[i] == 5 || a[i] == 7) {
            result[count] = a[i];
            count++;
        } else if (a[i] % 2 != 0 && a[i] % 3 != 0 && a[i] % 5 != 0 && a[i] % 7 != 0) {
            result[count] = a[i];
            count++;
        }
    }
    return result;
};
console.log(prime(arr));



//Return all the palindromes in an array
let arr = ["apple", "deified", "kayak", "google", "racecar"];

let palindrome = (a) => {
    let rev;
    let result = [];
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        rev = "";
        let temp = a[i].split("");
        for (let j = temp.length - 1; j >= 0; j--) {
            rev += temp[j];
        }
        if (rev === a[i]) {
            result[count] = a[i];
            count++;
        }
    }
    return result;
};
console.log(palindrome(arr));