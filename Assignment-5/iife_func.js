//Print odd numbers in an array
(function (a) {
    let sum = 0;
    for (let i = 1; i < a.length; i = i + 2) {
        sum += a[i];
    }
    console.log(sum);
})([12, 11, 15, 18, 5]);



//Convert all the strings to title caps in a string array
(function (s) {
    for (let i = 0; i < s.length; i++) {
        let strBreakUp = s[i].split("");
        if (strBreakUp.length >= 4) {
            strBreakUp[0] = strBreakUp[0].toUpperCase();
        }
        s[i] = strBreakUp.join("");
    }
    console.log(s);
})(["this", "sentence", "is", "in", "title", "caps"]);



//Sum of all numbers in an array
(function (a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == parseInt(a[i])) {
            sum += a[i];
        }
    }
    console.log(sum);
})([1, -1, 11, "disney", 27, 84, -86, "xt"]);



//Return all the prime numbers in an array
(function (a) {
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
    console.log(result);
})([7, 13, 587, 49, 7457, 22, 78]);



//Return all the palindromes in an array
(function (a) {
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
    console.log(result);
})(["apple", "deified", "kayak", "google", "racecar"]);



//Remove duplicates from an array
(function (a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (a[i] == a[j] && i != j) {
                a.splice(j, 1);
            }
        }
    }
    console.log(a);
})(["next", "time", "there", "won't", "be", "a", "next", "time"]);




//Rotate an array by k times
(function (a, x) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = i + x; j < a.length; j++) {
            result[j] = a[i];
        }
        if (i >= a.length - x) {
            for (let m = 0; m < x; m++) {
                result[m] = a[i];
                i++;
            }
        }
    }
    console.log(result);
})([12, 16, 3, 27, 87, 104, 7], 3);