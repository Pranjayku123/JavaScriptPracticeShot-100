// WAP that reverse the string "Pranjay"
// soluation-1
let orignalStr = "Pranjay";
let reverseStr = "";
for(let i = orignalStr.length-1; i >= 0; i--){
    reverseStr += orignalStr[i];   
}
// console.log(reverseStr);
// soluation -2
reverseStr= orignalStr.split('').reverse().join('');
// console.log(reverseStr);

// WAP To Find Duplicate Elements in an Array
const arr = [1, 2, 3, 4, 2, 3, 5, 6, 3];
function findDuplicate(data) {
    let unique = new Set();
    let duplicates = [];
    data.forEach(element => {
        if (unique.has(element)) {
            duplicates.push(element);
        } else {
            unique.add(element);
        }
    });

    return duplicates;
}


console.log(findDuplicate(arr)); 


// WAP To Check If a String is a Palindrome

// soluation-1
let str = "DAD";
// let reverseString = str.split("").reverse().join("");
let reverseString = "";
for (let i = str.length -1; i >= 0; i--) {
   reverseString += str[i];
}
console.log(reverseString);

// console.log(reverseString);
if(reverseString === str){
    // console.log(`${reverseString} is Palindrome String`);
    
}else{
// console.log(`${str} is Not Palindrome String`);
}


// WAP to count Vovel in String
const vovelString = "Pranjay Singh";
const Vowel = "aeiouAEIOU";

function vowelCountFn(str) {
    let vovelCount = 0;

    str.split('').forEach(char => {
        if (Vowel.includes(char)) {  // Check if the character is in the vowel list
            vovelCount++;
        }
    });

    return vovelCount;
}

// console.log(vowelCountFn(vovelString)); 

// Write a function to check if a number is even or odd.

// function checkEvenorOddNumberis(num){
//   if(num % 2 === 0){
//     console.log(`${num} is even number`)
//   }
//   else{
//     console.log("odd")
//   }
// }
// checkEvenorOddNumberis(4)


// Write a function to find the maximum of three numbers.

// const filterThreeMaxNumber = (arr) => {
  
//   const sortedArr = arr.map(Number).sort((a, b) => b - a); //dessending order
  
//   const smallNum = arr.map(Number).sort((a, b) => a - b); // assending order
//   console.log(smallNum.slice(0,3))
//   return sortedArr.slice(0,3)
  
// }
// const arr = ["20","120","111","215","54","78"];

// console.log(filterThreeMaxNumber(arr))


// Write a function to check if a number is prime.

const checkPrimeNumber = (number) => {
    if (number < 2) {
      console.log(`${number} is not a prime number`);
      return;
    }
  
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        console.log(`${number} is not a prime number`);
        return;
      }
    }
  
    console.log(`${number} is a prime number`);
  };
  
//   checkPrimeNumber(6); 
//   checkPrimeNumber(7); 
//   checkPrimeNumber(1);
  
  
  
  
  





 


 
    
 
 



